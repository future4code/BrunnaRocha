"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cashier_1 = require("./cashier");
const dessert_1 = require("./dessert");
const saltydish_1 = require("./saltydish");
const menu = [dessert_1.brigadeiro, dessert_1.pudim, dessert_1.boloBrunna, saltydish_1.feijoada, saltydish_1.shawarma, saltydish_1.falafel];
console.log(menu);
const cashier = new cashier_1.Cashier("Brunna", 1900);
cashier.sayJob();
console.log(cashier.bill([saltydish_1.shawarma, dessert_1.boloBrunna]));
//# sourceMappingURL=index.js.map