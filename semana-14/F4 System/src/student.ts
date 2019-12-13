import { User } from "./user"
import * as moment from "moment"
import { Mission } from "./mission";

export class Student implements User {
    team: Mission;
    name: string;    
    email: string;
    birthDate: moment.Moment;
    
    constructor(name: string, email: string, birthDate: moment.Moment, team: Mission){
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.team = team;
    }
}