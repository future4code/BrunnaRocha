import express, {Request, Response} from 'express'


const app = express()
app.use(express.json()) // Linha mágica (middleware)

const getTokenFromHeaders = (headers: any): string => {
    return (headers["auth"] as string) || "";
};

app.post("/login", async (req: Request, res: Response) => {});

app.get("/getMyInformation", async (req: Request, res: Response) => {});

app.post("/signup", async (req: Request, res: Response) => {});

app.post("/changePassword", async (req: Request, res: Response) => {});

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