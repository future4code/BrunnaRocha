import { UserGateway } from "../../gateways/user/UserGateway";
import { CryptographyGateway } from "../../gateways/crypt/CryptographyGateway";
import { UserTokenGateway } from "../../gateways/auth/UserTokenGateway";


export class LoginUC {
    constructor(
        private userGateway: UserGateway,
        private cryptographyGateway: CryptographyGateway,
        private userTokenGateway: UserTokenGateway
    ) {}

    async execute(input: LoginInput): Promise<LoginOutput> {

        const user = await this.userGateway.getUserByEmail(input.email)

        const verifyPassword = await this.cryptographyGateway.compare(input.password, user.getPassword())

        if(!verifyPassword){
            throw new Error("senha inválida")
        }

        return {
            token: this.userTokenGateway.generateToken(user.getId())
        }
    }
}

export interface LoginOutput {
    token: string
}

export interface LoginInput {
    email: string,
    password: string
}