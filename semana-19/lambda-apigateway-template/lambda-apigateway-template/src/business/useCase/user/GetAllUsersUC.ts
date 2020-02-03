import { UserGateway } from '../../gateways/user/UserGateway';

export class GetAllUsersUC {
    constructor(
        private userGateway: UserGateway,
    ) {}
    async execute(): Promise<GetAllUsersUCOutput> {
        const users = await this.userGateway.getAllUsersUC()
        return {
            users: users.map(user => ({
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                birthdate: user.getBirthdate(),
                age: user.getAge(),
                photo: user.getPhoto()
            }))
        }
    }
}

interface GetAllUsersUCOutput {
    users: GetAllUsersofOutput[]
}

interface GetAllUsersofOutput {
    id: string,
    name: string,
    email: string,
    birthdate: Date,
    age: string,
    photo: string
}