"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const teacher_1 = require("./teacher");
const specialty_1 = require("./specialty");
class Manager {
    constructor() {
        this.teacherList = [];
    }
    addTeacher(teacher) {
        this.teacherList.push(teacher);
    }
}
exports.Manager = Manager;
const teacher1 = new teacher_1.Teacher("Bolinha", "bolinha@uol.com", 15, 7, 1965, [specialty_1.Specialty.HTML, specialty_1.Specialty.CSS, specialty_1.Specialty.JS]);
console.log(teacher1);
const manager = new Manager();
manager.addTeacher(teacher1);
//# sourceMappingURL=managerTeam.js.map