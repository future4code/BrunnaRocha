import { User } from "./user"
import * as moment from "moment"

export class Student implements User {
    team: string // tipo: Mission
    name: string;    
    email: string;
    birthDate: moment.Moment;
    
    constructor(name: string, email: string, birthDate: moment.Moment, team: string){
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.team = team;
    }
}