import { User } from "./user";
import * as moment from "moment";
import { Specialty } from "./specialty"

export class Teacher implements User {
    specialty: Specialty;
    name: string;    
    email: string;
    birthDate: moment.Moment;
    
    constructor(name: string, email: string, birthDate: moment.Moment, specialty: Specialty){
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.specialty = specialty;
    }
}