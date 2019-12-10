"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dish_1 = require("./dish");
class SaltyDish extends dish_1.Dish {
    constructor(price, cost, ingredients, timeToCook) {
        super(price, cost, ingredients, timeToCook);
    }
    cook() {
        console.log("Starting Salty Dish");
    }
}
exports.SaltyDish = SaltyDish;
exports.feijoada = new SaltyDish(25, 13, ["arroz branco, couve, carne de porco, feijão preto"], 500);
console.log(exports.feijoada.getProfit());
exports.shawarma = new SaltyDish(25, 9, ["pão pita, carne, frango, tomate, zaatar, purê de batata"], 100);
console.log(exports.shawarma.getProfit());
exports.falafel = new SaltyDish(19, 6, ["gão de bico, salsinha, coentro, azeite"], 100);
console.log(exports.falafel.getProfit());
//# sourceMappingURL=saltydish.js.map