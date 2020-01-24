export class CreatePost {
    constructor (
        private photo: string,
        private description: string,
        private creationdate: Date = new Date(),
        private type: string
    ) {}

    public getPhoto(): string {
        return this.photo;
    }

    public getDescription(): string {
        return this.description;
    }

    public getCreationdate(): Date {
        return this.creationdate;
    }

    public getType(): string {
        return this.type;
    }

}