import { UserGateway } from "../gateways/user/UserGateway"
import { User } from "../../../entities/User"

export class CreateUserUC {
    constructor(private userGateway: UserGateway) {}

    async execute(input: CreateUserUCInput): Promise<void> {}   
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