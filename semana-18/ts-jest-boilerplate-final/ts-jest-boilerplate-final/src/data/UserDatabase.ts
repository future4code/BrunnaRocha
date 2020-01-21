import knex from 'knex';
import { User } from '../business/entities/User';


export class UserDatabase extends UserGateway {
    private connection = knex({...
    });


    public async getUserById(id: string): Promise<User> {
        const query = await this.connection.raw(
            `SELECT * FROM user_FutureBook WHERE id='${id}';`
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
            `SELECT * FROM user_FutureBook WHERE email='${email}';`
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
        .into("user_FutureBook")
    }

    async verifyUserExists(id: string): Promise<boolean> {
        const query = await this.connection.raw(
            `SELECT * FROM use_FutureBook WHERE id=${id};`
        );
        const returnedUser = query [0] [0];

        return Boolean(returnedUser);
    }
}