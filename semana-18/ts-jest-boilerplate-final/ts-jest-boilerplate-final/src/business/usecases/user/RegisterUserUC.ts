import { User } from "../../entities/User";
import { AuthGateway } from "../../gateways/AuthGateway";
import { UserGateway } from "../../gateways/UserGateway";
import { CryptoGateway } from "../../gateways/CryptoGateway";
import { IdGeneratorGateway } from "../../gateways/IdGeneratorGateway";


export class RegisterUserUC {
    constructor(
        private userGateway: UserGateway,
        private cryptoGateway: CryptoGateway,
        private idGenerator: IdGeneratorGateway,
        private auth: AuthGateway
    ) { }

    async execute(input: RegisterUserUCInput): Promise<string> {
        this.validateUserInput(input);
        const id = this.idGenerator.generate();
        const password = await this.cryptoGateway.hash(input.password);
        const user = new User(id, input.name, input.email, password);
       

        await this.userGateway.registerUser(user);
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
