"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(name, email, day, month, year, team) {
        this.name = name;
        this.email = email;
        this.birthDate = new Date(`${year}/${month}/${day}`),
            this.team = team;
    }
}
exports.Student = Student;
//# sourceMappingURL=student.js.map