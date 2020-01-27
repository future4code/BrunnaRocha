export class Recipe {
    private title: string
    private description: string
    private creationDate: Date   
    private userid: string
    
    
    constructor(title: string, description: string, userid: string, creationDate: Date) {
        this.title = title
        this.description = description
        this.userid = userid
        this.creationDate = creationDate || new Date()
    }                                                                                                                             
}