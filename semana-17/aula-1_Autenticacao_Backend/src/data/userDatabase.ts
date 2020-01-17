import { UserGateway } from "../business/gateways/user/UserGateway"
import { User } from "../business/entities/User"
import knex from "knex";

export class UserDatabase implements UserGateway {
    private connection = knex({
        client: 'mysql',
        connection: {
            host: ' ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
            user: 'brunna',
            password: 'f0938b7263c683db91a52018a6b038e8',
            database: 'brunna'
        }
    });


    // public async createUserTable(): Promise<void> {
    //     await this.connection.raw(`DROP TABLE Users`);
    //     await this.connection.raw(`CREATE TABLE Users(
    //         id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    //         name varchar(255) NOT NULL,
    //         email varchar(255) NOT NULL UNIQUE,
    //         age int NOT NULL,
    //         password varchar(255) NOT NULL
    //     )`);
    // }

    public async getUserById(id: string): Promise<User> {
        const query = await this.connection.raw(
            `SELECT * FROM Users WHERE id='${parseInt(id)}';`
        );
        
        const returnedUser = query[0] [0];
        if (!returnedUser) {
            throw new Error("User not found");
        }
        return new User(
            returnedUser.id,
            returnedUser.name,
            returnedUser.email,
            returnedUser.age,
            returnedUser.password
        );
    }

    public async getUserByEmail(email: string): Promise<User> {
        const query = await this.connection.raw(
            `SELECT * FROM Users WHERE email='${email}';`
        );

        const returnedUser = query [0] [0];
        if(!returnedUser) {
            throw new Error("User not found"); 
        }

        return new User(
            returnedUser.id,
            returnedUser.email,
            returnedUser.password,
            returnedUser.name,
            returnedUser.age 
        );
    }

    public async getAllUsers(): Promise<User []> {
        const query = this.connection.raw("SELECT * FROM Users;");
        const usersFromDb = await query;
        return usersFromDb[0]. map(
            (user: any) =>
                new User(user.id, user.email, user.password, user.name, user.age)
        );
    }

    public async createUser(user: User): Promise<void> {
        await this.connection
        .insert({
            id: user.getId(),
            email: user.getEmail(),
            password: user.getPassword()
        })
        .into("Users");
    }

    public async updatePassword(id: number, newPassword: string): Promise<void> {
        await this.connection.raw(
            `UPDATE Users SET password='${newPassword}' WHERE id=${id};`
        );
    }

    async veryfyUserExists(id: string): Promise<boolean> {
        const query = await this.connection.raw(
            `SELECT * FROM Users WHERE id=${id};`
        );

        const returnedUser = query [0] [0];

        return Boolean(returnedUser);
    }
}
