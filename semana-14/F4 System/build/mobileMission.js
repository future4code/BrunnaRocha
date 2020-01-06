"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mission_1 = require("./mission");
class MobileMission extends mission_1.Mission {
    constructor(team, startDate, endDate, studentList, teacherList) {
        super(startDate, endDate, studentList, teacherList);
        this.team = team;
    }
}
exports.MobileMission = MobileMission;
//# sourceMappingURL=mobileMission.js.map