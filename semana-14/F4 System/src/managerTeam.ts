import { Teacher } from "./teacher";
import { Specialty } from "./specialty";

export class Manager {
    teacherList:Teacher[];

    constructor(){
        this.teacherList=[]
    }

    addTeacher(teacher: Teacher) {
        this.teacherList.push(teacher)
    }
}


const teacher1: Teacher = new Teacher ("Bolinha", "bolinha@uol.com", 15,7,1965, [Specialty.HTML, Specialty.CSS, Specialty.JS]) 
console.log(teacher1)

const manager = new Manager ()

manager.addTeacher(teacher1)
