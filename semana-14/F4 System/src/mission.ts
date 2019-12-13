import * as moment from "moment";
import { Student } from "./student";
import { Teacher } from "./teacher";

export abstract class Mission {
    startDate: moment.Moment;
    endDate: moment.Moment;
    studentList: Student[];
    teacherList: Teacher[];

    constructor(startDate: moment.Moment, endDate: moment.Moment, studentList: Student[], teacherList: Teacher[]) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.studentList = studentList;
        this.teacherList = teacherList;
    }    
}