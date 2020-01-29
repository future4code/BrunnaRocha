import { User } from '../business/entities/User';
import { UserGateway } from '../business/gateways/user/UserGateway'
import { BaseDatabase } from './BaseDatabase';


export class UserDatabase extends BaseDatabase implements UserGateway {
    
    public async getUserById(id: string): Promise<User> {
        const query = await this.connection.raw(
            `SELECT * FROM Astromatc_users WHERE astromatch_id="${id}";`
        );

        const returnedUser = query[0] [0];
        if (!returnedUser) {
            throw new Error("usuário não encontrado");
        }

        return new User(
            returnedUser.id,
            returnedUser.name,
            returnedUser.email,
            returnedUser.password,
            returnedUser.birthdate,
            returnedUser.age,
            returnedUser.photo
        );
    }

    public async getUserByEmail (email: string): Promise<User> {
        const query = await this.connection.raw(
            `SELECT * FROM Astromatch_users WHERE astromatch_email="${email}";`
        );

        const returnedUser = query [0] [0];
        if(!returnedUser) {
            throw new Error("Usuário não encontrado");
        }
        return new User(
            returnedUser.id,
            returnedUser.name,
            returnedUser.email,
            returnedUser.password,
            returnedUser.birthdate,
            returnedUser.age,
            returnedUser.photo
        );
    }

    public async createUser(user: User): Promise<void> {
        await this.connection
        .insert({
            astromatch_id: user.getId(),
            astromatch_name: user.getName(),
            astromatch_email: user.getEmail(),
            astromatch_password: user.getPassword(),
            astromatch_birthdate: user.getBirthdate(),
            astromatch_age: user.getAge(),
            astromatch_photo: user.getPhoto()
        })
        .into("Astromatch_users")
    }

    async verifyUserExists(id: string): Promise<boolean> {
        const query = await this.connection.raw(
            `SELECT * FROM Astromatch_users WHERE id="${id}";`
        );
        const returnedUser = query [0] [0];

        return Boolean(returnedUser);
    }

    public async getAllUsersUC(): Promise<User[]> {
        const query = this.connection.raw("SELECT * FROM Astromatch_users;");
        const usersFromDb = await query;
        return usersFromDb[0].map(
            (user: any) =>
                new User(user.id, user.name, user.email, user.password, user.birthdate, user.age, user.photo)
        );
    }

}