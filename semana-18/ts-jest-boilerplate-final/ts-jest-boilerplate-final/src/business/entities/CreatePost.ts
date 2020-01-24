export class CreatePost {
    constructor (
        private photo: string,
        private description: string,
        private criationdate: Date = new Date(),
        private type: string
    ) {}

    public getPhoto(): string {
        return this.photo;
    }

    public getDescription(): string {
        return this.description;
    }

    public getCriationdate(): Date {
        return this.criationdate;
    }

    public getType(): string {
        return this.type;
    }

}