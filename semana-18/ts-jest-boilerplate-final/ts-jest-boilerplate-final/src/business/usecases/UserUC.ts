export class UserUC {
    constructor(
        private userGateway: UserGateway,
        private cryptographyGateway: CryptographyGateway,
        private idGenerator: IdGeneratorGateway
    ) { }

    async execute(input: CreateUserUCInput): Promise<CreateUseUCOutput> {
        const encryptedPassword = await this.cryptographyGateway.encrypt(
            input.password
        );

        const user = new UserUC(
            this.idGenerator.generateId(),
            input.email,
            encryptedPassword,
        )
        try {
            await this.userGateway.createUser(user)
        } catch (err) {
            console.log(err.message)
            throw new Error("Ocorreu um erro!")
        }

        return {
            message: "Usuário criado com sucesso!"
        }
    }
}

export interface CreateUserUCInput {
    name: string;
    email: string;
    age: number;
    password: string;
}

export interface CreateUseUCOutput {
    message: string;
}
