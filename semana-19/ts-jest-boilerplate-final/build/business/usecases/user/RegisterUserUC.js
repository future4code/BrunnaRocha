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
const User_1 = require("../../entities/User");
class RegisterUserUC {
    constructor(userGateway, cryptoGateway, idGeneratorGateway, auth) {
        this.userGateway = userGateway;
        this.cryptoGateway = cryptoGateway;
        this.idGeneratorGateway = idGeneratorGateway;
        this.auth = auth;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            this.validateUserInput(input);
            const id = this.idGeneratorGateway.generateId();
            const password = yield this.cryptoGateway.hash(input.password);
            const user = new User_1.User(id, password, input.name, input.email, input.birthdate, input.age, input.photo);
            yield this.userGateway.createUser(user);
            const token = this.auth.generateToken(user.getId());
            return token;
        });
    }
    validateUserInput(input) {
        if (!input.name || !input.email || !input.password || !input.birthdate || !input.age || !input.photo) {
            throw new Error("Algum(s) campo(s) está(ão) inválido(s)!");
        }
    }
}
exports.RegisterUserUC = RegisterUserUC;
