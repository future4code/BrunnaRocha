import { UserGateway } from '../../gateways/user/UserGateway';

export class FollowUserUC {
    constructor( private userGateway: UserGateway){}

    async execute(input: FollowUserInput) {
        await this.verifyUsersExists(input)

        await this.userGateway.createUserRelation(input.followerId, input.followedId)
    }
    


    async verifyUsersExists(input: FollowUserInput) {
        await Promise.all([
        this.userGateway.verifyUserExists(input.followerId),
        this.userGateway.verifyUserExists(input.followedId)
        ])
    }
}    


export interface FollowUserInput {
    followerId: string,
    followedId: string
}