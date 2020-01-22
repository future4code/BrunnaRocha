import express, {Request, Response, request} from 'express'
import { UserDatabase } from '../data/UserDatabase';
import { BcryptService } from '../business/service/cryptography/BcryptService';
import { JwtAuthService } from '../business/service/auth/jwtAuthService';


const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post("/signup", async (req: request, res: Response) => {
    try {
        const createUserUC = new createUserUC(
            new UserDatabase(),
            new BcryptService(),
            new v4IdGenerator(),
            new JwtAuthService()
        );

        const result = await createUserUC.execute({
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

        const result = await loginUseCase.execute({
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

export default app