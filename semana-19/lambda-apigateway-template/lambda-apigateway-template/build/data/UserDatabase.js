"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../business/entities/User");
const BaseDatabase_1 = require("./BaseDatabase");
class UserDatabase extends BaseDatabase_1.BaseDatabase {
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.connection.raw(`SELECT * FROM Astromatc_users WHERE astromatch_id="${id}";`);
            const returnedUser = query[0][0];
            if (!returnedUser) {
                throw new Error("usuário não encontrado");
            }
            return new User_1.User(returnedUser.id, returnedUser.name, returnedUser.email, returnedUser.password, returnedUser.birthdate, returnedUser.age, returnedUser.photo);
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.connection.raw(`SELECT * FROM Astromatch_users WHERE astromatch_email="${email}";`);
            const returnedUser = query[0][0];
            if (!returnedUser) {
                throw new Error("Usuário não encontrado");
            }
            return new User_1.User(returnedUser.id, returnedUser.name, returnedUser.email, returnedUser.password, returnedUser.birthdate, returnedUser.age, returnedUser.photo);
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection
                .insert({
                astromatch_id: user.getId(),
                astromatch_name: user.getName(),
                astromatch_email: user.getEmail(),
                astromatch_password: user.getPassword(),
                astromatch_birthdate: user.getBirthdate(),
                astromatch_age: user.getAge(),
                astromatch_photo: user.getPhoto()
            })
                .into("Astromatch_users");
        });
    }
    verifyUserExists(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.connection.raw(`SELECT * FROM Astromatch_users WHERE id="${id}";`);
            const returnedUser = query[0][0];
            return Boolean(returnedUser);
        });
    }
    getAllUsersUC() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = this.connection.raw("SELECT * FROM Astromatch_users;");
            const usersFromDb = yield query;
            return usersFromDb[0].map((user) => new User_1.User(user.id, user.name, user.email, user.password, user.birthdate, user.age, user.photo));
        });
    }
}
exports.UserDatabase = UserDatabase;
