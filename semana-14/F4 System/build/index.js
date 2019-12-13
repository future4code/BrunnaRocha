"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const student_1 = require("./student");
const webMission_1 = require("./webMission");
const newton = new webMission_1.Webmission("Newton", "05-02-2019", "04-02-2020", [], []);
console.log(newton);
const marieCurie = new student_1.Student("Marie Curie", "mariecurie@uol.com", 3, 12, 1978, newton);
console.log(marieCurie);
//# sourceMappingURL=index.js.map