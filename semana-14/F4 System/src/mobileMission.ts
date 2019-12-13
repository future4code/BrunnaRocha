import { Mission } from "./mission";
import { Student } from "./student";
import { Teacher } from "./teacher";
import * as moment from "moment";

export class MobileMission extends Mission {
    team: number;

    constructor(team: number, startDate: moment.Moment, endDate: moment.Moment, studentList: Student[], teacherList: Teacher[]){

        super(startDate, endDate, studentList, teacherList)
        this.team = team;
        
    }
}