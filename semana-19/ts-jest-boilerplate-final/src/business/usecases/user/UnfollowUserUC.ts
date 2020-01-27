import { UserGateway } from '../../gateways/user/UserGateway';

export class UnfollowUserUC {
    constructor( private userGateway: UserGateway){}

    async execute(input: UnfollowUserInput) {
        await this.verifyUsersExists(input)

        await this.userGateway.undoUserRelation(input.followerId, input.followedId)
    }
    


    async verifyUsersExists(input: UnfollowUserInput) {
        await Promise.all([
        this.userGateway.verifyUserExists(input.followerId),
        this.userGateway.verifyUserExists(input.followedId)
        ])
    }
}    


export interface UnfollowUserInput {
    followerId: string,
    followedId: string
}