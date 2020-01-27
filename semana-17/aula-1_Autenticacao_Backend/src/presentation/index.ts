import express, {Request, Response} from 'express'
import { LoginUC } from '../business/usecases/auth/Login';
import { UserDatabase } from '../data/userDatabase';
import { GetLoggedUserInformationUC } from '../business/usecases/users/GetLoggedUserInformation';
import { CreateUserUC } from '../business/usecases/users/CreateUserUC';
import { V4IdGenerator } from '../services/auth/v4IdGenerator';
import { JwtAuthService } from '../services/auth/JWTAuthService';
import { BcryptService } from '../services/cryptography/BcryptService'



const app = express()
app.use(express.json()) // Linha mágica (middleware)

const getTokenFromHeaders = (headers: any): string => {
    return (headers["auth"] as string) || "";
};

app.post("/login", async (req: Request, res: Response) => {
    try{
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
            message: err.message
        })
    }
});

app.get("/getMyInformation", async (req: Request, res: Response) => {
    try {
        const getLoggedUserInformationUC = new GetLoggedUserInformationUC(
            new JwtAuthService(),
            new UserDatabase()
        )
        const token = getTokenFromHeaders(req.headers)
        const result = await getLoggedUserInformationUC.execute(token)
            res.send(result).status(200)
    } catch(err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
});

app.post("/signup", async (req: Request, res: Response) => {
    try {
        const createUserUC = new CreateUserUC(
            new UserDatabase(),
            new BcryptService(),
            new V4IdGenerator()
        );
        const result = await createUserUC.execute({
            email: req.body.email,
            password: req.body.password
        });
        res.status(200).send(result)
    } catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
});

app.post("/changePassword", async (req: Request, res: Response) => {

});

app.get("/getAllUsers", async (req: Request, res: Response) => {
    try {
        const getAllUsersUC = new getAllUsersUC(new UserDataBase());
        const result = await getAllUsersUC.execute();
        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
});

export default app;