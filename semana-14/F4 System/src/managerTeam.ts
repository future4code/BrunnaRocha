import { Teacher } from "./teacher";
import { Student } from "./student";
import { Specialty } from "./specialty";
import { Webmission } from "./webMission";
import { MobileMission } from "./mobileMission";

export class Manager {
    teacherList:Teacher[];
    studentList:Student[];
    webMission: Webmission[];
    mobileMission: MobileMission[]

    constructor(){
        this.teacherList=[],
        this.studentList=[],
        this.webMission=[],
        this.mobileMission=[]
    }

    addTeacher(teacher: Teacher) {
        this.teacherList.push(teacher)
        console.log(`Professor ${teacher.name} adicionado com sucesso!`)
    }

    addStudent(student: Student) {
        this.studentList.push(student)
        console.log(`Aluno ${student.name} adicionado com sucesso!`)
    }

    addWebMission(webMission: Webmission) {
        this.webMission.push(webMission)
        console.log(`Turma ${webMission.patron}WFS adicionada com sucesso!`)
    }

    addMobileMission(mobileMission: MobileMission) {
        this.mobileMission.push(mobileMission)
        console.log(`Turma ${mobileMission.team}Mobile adicionada com sucesso!`)
    }
}


const teacher1: Teacher = new Teacher ("Bolinha", "bolinha@uol.com", 15,7,1965, [Specialty.HTML, Specialty.CSS, Specialty.JS]) 

const newton: Webmission = new Webmission("Newton", "05-02-2019", "04-02-2020", [], [])


const marieCurie: any = new Student("Marie Curie", "mariecurie@uol.com", 3,12,1978, newton)


const manager = new Manager ()

manager.addTeacher(teacher1)
manager.addStudent(marieCurie)
manager.addWebMission(newton)


