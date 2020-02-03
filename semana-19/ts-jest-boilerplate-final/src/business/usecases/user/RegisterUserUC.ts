import { User } from "../../entities/User";
import { UserGateway } from "../../gateways/user/UserGateway";
import { CryptoGateway } from "../../gateways/CryptoGateway";
import { IdGeneratorGateway } from "../../gateways/IdGeneratorGateway";
import { UserTokenGateway } from "../../gateways/user/UserTokenGateway";


export class RegisterUserUC {
    constructor(
        private userGateway: UserGateway,
        private cryptoGateway: CryptoGateway,
        private idGeneratorGateway: IdGeneratorGateway,
        private auth: UserTokenGateway
    ) { }

    async execute(input: RegisterUserUCInput): Promise<string> {
        this.validateUserInput(input);
        const id = this.idGeneratorGateway.generateId();
        const password = await this.cryptoGateway.hash(input.password);
        const user = new User(id, password, input.name, input.email, input.birthdate, input.age, input.photo );
       

        await this.userGateway.createUser(user);
        const token = this.auth.generateToken(user.getId());

        return token; 
    }

    private validateUserInput(input: RegisterUserUCInput) {
        if(!input.name || !input.email || !input.password || !input.birthdate || !input.age || !input.photo){
            throw new Error("Algum(s) campo(s) está(ão) inválido(s)!")
        }
    }
}

export interface RegisterUserUCInput {
    name: string;
    email: string;
    password: string;
    birthdate: Date;
    age: string;
    photo: string;
}

export interface CreateUseUCOutput {
    message: string;
}
