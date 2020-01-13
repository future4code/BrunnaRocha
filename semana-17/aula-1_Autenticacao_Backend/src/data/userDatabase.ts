import { UserGateway } from "../business/gateways/UserGateway"
import { User } from "../entities/User"
import knex from "knex";

export class UserDatabase implements UserGateway {
    private connection = knex({
        client: "mysql",
        connection: {
            host: "localhost",
            user: "root",
            password: "jvg1015115",
            database: "aulaJwt"
        }
    });

    public async createUserTable(): Promise<void> {
        await this.connection.raw(`DROP TABLE Users`);
        await this.connection.raw(`CREATE TABLE Users(
            id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
            name varchar(255) NOT NULL,
            email varchar(255) NOT NULL UNIQUE,
            age int NOT NULL,
            password varchar(255) NOT NULL
        )`);
    }

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
    }
}
