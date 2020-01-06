"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mission_1 = require("./mission");
class Webmission extends mission_1.Mission {
    constructor(patron, startDate, endDate, studentList, teacherList) {
        super(startDate, endDate, studentList, teacherList);
        this.patron = patron;
    }
}
exports.Webmission = Webmission;
//# sourceMappingURL=webMission.js.map