import { User } from "./user";
import * as moment from "moment";
import { Specialty } from "./specialty"

export class Teacher implements User {
    specialty: Specialty[];
    name: string;    
    email: string;
    birthDate: Date;
    
    constructor(name: string, email: string, day: number, month: number, year: number, specialty: Specialty[]){
        this.name = name;
        this.email = email;
        this.birthDate = new Date (`${year}/${month}/${day}`),
        this.specialty = specialty;
    }
}