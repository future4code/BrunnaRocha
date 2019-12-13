"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const teacher_1 = require("./teacher");
const student_1 = require("./student");
const specialty_1 = require("./specialty");
const webMission_1 = require("./webMission");
class Manager {
    constructor() {
        this.teacherList = [],
            this.studentList = [],
            this.webMission = [],
            this.mobileMission = [];
    }
    addTeacher(teacher) {
        this.teacherList.push(teacher);
        console.log(`Professor ${teacher.name} adicionado com sucesso!`);
    }
    addStudent(student) {
        this.studentList.push(student);
        console.log(`Aluno ${student.name}adicionado com sucesso!`);
    }
    addWebMission(webMission) {
        this.webMission.push(webMission);
        console.log(`Turma ${webMission.patron}WFS adicionada com sucesso!`);
    }
    addMobileMission(mobileMission) {
        this.mobileMission.push(mobileMission);
        console.log(`Turma ${mobileMission.team}Mobile adicionada com sucesso!`);
    }
}
exports.Manager = Manager;
const teacher1 = new teacher_1.Teacher("Bolinha", "bolinha@uol.com", 15, 7, 1965, [specialty_1.Specialty.HTML, specialty_1.Specialty.CSS, specialty_1.Specialty.JS]);
const newton = new webMission_1.Webmission("Newton", "05-02-2019", "04-02-2020", [], []);
const marieCurie = new student_1.Student("Marie Curie", "mariecurie@uol.com", 3, 12, 1978, newton);
const manager = new Manager();
manager.addTeacher(teacher1);
manager.addStudent(marieCurie);
manager.addWebMission(newton);
//# sourceMappingURL=managerTeam.js.map