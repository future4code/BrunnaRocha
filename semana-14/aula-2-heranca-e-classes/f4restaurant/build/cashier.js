"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
class Cashier extends employee_1.Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    bill(dishes) {
        let total = 0;
        for (let dish of dishes) {
            total += dish.price;
        }
        ;
        return total;
    }
    ;
    sayJob() {
        console.log("A sua conta foi de R$");
    }
}
exports.Cashier = Cashier;
//# sourceMappingURL=cashier.js.map