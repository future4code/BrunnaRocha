import { Mission } from "./mission";
import { Student } from "./student";
import { Teacher } from "./teacher";
import * as moment from "moment";

export class Webmission extends Mission {
    patron: string

    constructor(patron: string, startDate: moment.Moment, endDate: moment.Moment, studentList: Student[], teacherList: Teacher[]){

        super(startDate, endDate, studentList, teacherList)
        this.patron = patron;
        
    }
}