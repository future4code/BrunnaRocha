import { Mission } from "./mission";
import { Student } from "./student";
import { Teacher } from "./teacher";


export class MobileMission extends Mission {
    team: number;

    constructor(team: number, startDate: string, endDate: string, studentList: Student[], teacherList: Teacher[]){

        super(startDate, endDate, studentList, teacherList)
        this.team = team;
        
    }
}