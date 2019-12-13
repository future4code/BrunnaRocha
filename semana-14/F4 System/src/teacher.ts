import { User } from "./user"
import * as moment from "moment"

export class Teacher implements User {
    specialty: string // tipo: specialty - ENUM
    name: string;    
    email: string;
    birthDate: moment.Moment;
    
    constructor(name: string, email: string, birthDate: moment.Moment, specialty: string){
        this.name = name;
        this.email = email;
        this.email = email;
        this.birthDate = birthDate;
        this.specialty = specialty;
    }
}