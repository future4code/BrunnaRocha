"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Teacher {
    constructor(name, email, day, month, year, specialty) {
        this.name = name;
        this.email = email;
        this.birthDate = new Date(`${year}/${month}/${day}`),
            this.specialty = specialty;
    }
}
exports.Teacher = Teacher;
//# sourceMappingURL=teacher.js.map