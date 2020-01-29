export class User {
    constructor (
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private birthdate: Date,
        private age: string,
        private photo: string
    ) {}

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }

    public getBirthdate(): Date {
        return this.birthdate;
    }

    public getAge(): string {
        return this.age
    }

    public getPhoto(): string {
        return this.photo
    }

}