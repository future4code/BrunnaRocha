import express, {Request, Response, request} from 'express'
import { UserDatabase } from '../data/UserDatabase';
import { BcryptService } from '../business/service/cryptography/BcryptService';
import { JwtAuthService } from '../business/service/auth/jwtAuthService';
import { V4IdGenerator } from '../business/service/auth/V4IdGenerator';
import { RegisterUserUC } from '../business/usecases/user/RegisterUserUC';
import { LoginUC } from '../business/usecases/user/LoginUC';
import { GetAllUsersUC } from '../business/usecases/user/GetAllUsersUC';
import { FollowUserUC, FollowUserInput } from '../business/usecases/user/FollowUserUC';
import { UnfollowUserUC, UnfollowUserInput } from '../business/usecases/user/UnfollowUserUC';


const app = express()
app.use(express.json()) // Linha mágica (middleware)

const getTokenFromHeaders = (headers: any): string => {
    return (headers["auth"] as string) || "";
};

app.post("/signup", async (req: Request, res: Response) => {
    try {
        const createUser = new RegisterUserUC (
            new UserDatabase(),
            new BcryptService(),
            new V4IdGenerator(),
            new JwtAuthService()
        );

        const result = await createUser.execute({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        res.status(200).send(result)
        
    } catch (err) {
        res.status(400).send({
            erroMessage: err.message
        })
    }
});

app.post("/login", async (req: Request, res: Response) => {
    try {
        const loginUC = new LoginUC(
            new UserDatabase(),
            new BcryptService(),
            new JwtAuthService()
        )

        const result = await loginUC.execute({
            email: req.body.email,
            password: req.body.password
        })

        res.send(result)

    } catch(err) {
        res.status(400).send({
            erroMessage: err.message
        })
    }
});

app.get("/getAllUsers", async (req: Request, res: Response) => {
    try {
        const getAllUsersUC = new GetAllUsersUC(new UserDatabase());
        const result = await getAllUsersUC.execute();
        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
});

function authenticate(req: Request) {
    const jwtAuthService = new JwtAuthService()
    return jwtAuthService.getUserIdFromToken(getTokenFromHeaders(req.headers))
}

app.post("/users/follow", async (req: Request, res: Response) => {
    try {
        const userId = authenticate(req)
        const followUser = new FollowUserUC (
            new UserDatabase(),
        );

        const input: FollowUserInput = {
            followerId: userId,
            followedId: req.body.userToFollow
        }    

        await followUser.execute(input)
        res.status(200).send({
            message: "Usuário seguido com sucesso!"
        });
    } catch (err) {
        res.status(400).send({
            errorMessage: err.message
        })
    }
});

app.delete("/users/unfollow", async (req: Request, res: Response) => {
    try {
        const userId = authenticate(req)
        const unfollowUser = new UnfollowUserUC (
            new UserDatabase(),
        );

        const input: UnfollowUserInput = {
            followerId: userId,
            followedId: req.body.userToUnfollow
        }    

        await unfollowUser.execute(input)
        res.status(200).send({
            message: "Usuário excluído da sua rede com sucesso!"
        });
    } catch (err) {
        res.status(400).send({
            errorMessage: err.message
        })
    }
});

export default app