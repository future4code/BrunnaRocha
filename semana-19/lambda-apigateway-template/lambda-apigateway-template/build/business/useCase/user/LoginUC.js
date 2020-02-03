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
class LoginUC {
    constructor(userGateway, cryptoGateway, userTokenGateway) {
        this.userGateway = userGateway;
        this.cryptoGateway = cryptoGateway;
        this.userTokenGateway = userTokenGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userGateway.getUserByEmail(input.email);
            const verifyPassword = yield this.cryptoGateway.compare(input.password, user.getPassword());
            if (!verifyPassword) {
                throw new Error("Senha ou email inválido");
            }
            return {
                token: this.userTokenGateway.generateToken(user.getId())
            };
        });
    }
}
exports.LoginUC = LoginUC;
