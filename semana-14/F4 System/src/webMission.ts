import { Mission } from "./mission";
import { Student } from "./student";
import { Teacher } from "./teacher";


export class Webmission extends Mission {
    patron: string

    constructor(patron: string, startDate: string, endDate: string, studentList: Student[], teacherList: Teacher[]){

        super(startDate, endDate, studentList, teacherList)
        this.patron = patron;
        
    }
}