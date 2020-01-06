import { User } from "./user";
import { Mission } from "./mission";


export class Student implements User {
    team: Mission;
    name: string;    
    email: string;
    birthDate: Date;
    
    constructor(name: string, email: string, day: number, month: number, year: number, team: Mission){
        this.name = name;
        this.email = email;
        this.birthDate = new Date (`${year}/${month}/${day}`),
        this.team = team;
    }
}