import knex from 'knex';
import { User } from '../business/entities/User';
import { UserGateway } from '../business/gateways/user/UserGateway'


export class UserDatabase implements UserGateway {
    private connection = knex({
        client: 'mysql',
        connection: {
            host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
            user: 'brunna',
            password: 'f0938b7263c683db91a52018a6b038e8',
            database: 'brunna'   
        }
    });


    public async getUserById(id: string): Promise<User> {
        const query = await this.connection.raw(
            `SELECT * FROM FutureBook_user WHERE id='${id}';`
        );

        const returnedUser = query[0] [0];
        if (!returnedUser) {
            throw new Error("usuário não encontrado");
        }

        return new User(
            returnedUser.id,
            returnedUser.name,
            returnedUser.email,
            returnedUser.password
        );
    }

    public async getUserByEmail (email: string): Promise<User> {
        const query = await this.connection.raw(
            `SELECT * FROM FutureBook_user WHERE email='${email}';`
        );

        const returnedUser = query [0] [0];
        if(!returnedUser) {
            throw new Error("Usuário não encontrado");
        }
        return new User(
            returnedUser.id,
            returnedUser.name,
            returnedUser.email,
            returnedUser.password
        );
    }

    public async createUser(user: User): Promise<void> {
        await this.connection
        .insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword()
        })
        .into("FutureBook_user")
    }

    async verifyUserExists(id: string): Promise<boolean> {
        const query = await this.connection.raw(
            `SELECT * FROM FutureBook_user WHERE id=${id};`
        );
        const returnedUser = query [0] [0];

        return Boolean(returnedUser);
    }

    public async getAllUsersUC(): Promise<User[]> {
        const query = this.connection.raw("SELECT * FROM FutureBook_user;");
        const usersFromDb = await query;
        return usersFromDb[0].map(
            (user: any) =>
                new User(user.id, user.name, user.email, user.password)
        );
    }

    async createUserRelation(followerId: string, followedId: string): Promise<void> {
        await this.connection.raw(`
        INSERT TO FutureBook_users_relations (follower_id, followed_id)
        VALUES {"${followerId}", "${followedId}"}
        `)
    }
}