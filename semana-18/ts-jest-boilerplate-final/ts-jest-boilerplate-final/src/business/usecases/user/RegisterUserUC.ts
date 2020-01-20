import { User } from "../../entities/User";

export class RegisterUserUC {
    constructor(
        private userGateway: UserGateway,
        private cryptographyGateway: CryptographyGateway,
        private idGenerator: IdGeneratorGateway,
        private auth: AuthGateway
    ) { }

    async execute(input: RegisterUserUCInput): Promise<string> {
        this.validateUserInput(input);
        const id = this.idGenerator.generate();
        const user = new User(id, input.name, input.email, input.password);
        const password = this.cryptographyGateway.hash(input.password);

        await this.userGateway.registerUser(User);
        const token = this.auth.createToken(user.getId(), user.getEmail());

        return token; 
    }

    private validateUserInput(input: RegisterUserUCInput) {
        if(!input.email || !input.password || !input.name){
            throw new Error("Algum(s) campo(s) está(ão) inválido(s)!")
        }
    }
}

export interface RegisterUserUCInput {
    name: string;
    email: string;
    password: string;
}

export interface CreateUseUCOutput {
    message: string;
}
