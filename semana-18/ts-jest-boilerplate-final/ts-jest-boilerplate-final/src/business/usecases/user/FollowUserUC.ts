import { UserGateway } from '../../gateways/user/UserGateway';

export class FollowUserUC {
    constructor( private userGateway: UserGateway){}

    async execute(input: FollowUserInput) {
        await this.verifyUsersExists(input)

        await this.userGateway.createUserRelation(input.followedId, input.followedId)
    }
    


    async verifyUsersExists(input: FollowUserInput) {
        await Promise.all([
        this.userGateway.verifyUserExists(input.followedId),
        this.userGateway.verifyUserExists(input.followerId)
        ])
    }
}    


export interface FollowUserInput {
    followerId: string,
    followedId: string
}