"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, name, email, password, birthdate, age, photo) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.birthdate = birthdate;
        this.age = age;
        this.photo = photo;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    getBirthdate() {
        return this.birthdate;
    }
    getAge() {
        return this.age;
    }
    getPhoto() {
        return this.photo;
    }
}
exports.User = User;
