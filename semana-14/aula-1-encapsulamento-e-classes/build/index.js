"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserAccount {
    getBalance() {
        console.log('O seu extrato é de R$ ');
    }
    addBalance(value) {
        this.balance += value;
    }
}
const userManager = new UserAccount();
userManager.getBalance();
exports.default = UserAccount;
//# sourceMappingURL=index.js.map