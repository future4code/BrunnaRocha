"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./student");
const teacher_1 = require("./teacher");
const specialty_1 = require("./specialty");
const webMission_1 = require("./webMission");
const teacher1 = new teacher_1.Teacher("Bolinha", "bolinha@uol.com", 15, 7, 1965, [specialty_1.Specialty.HTML, specialty_1.Specialty.CSS, specialty_1.Specialty.JS]);
console.log(teacher1);
const newton = new webMission_1.Webmission("Newton", "05-02-2019", "04-02-2020", [], []);
console.log(newton);
const marieCurie = new student_1.Student("Marie Curie", "mariecurie@uol.com", 3, 12, 1978, newton);
console.log(marieCurie);
//# sourceMappingURL=index.js.map