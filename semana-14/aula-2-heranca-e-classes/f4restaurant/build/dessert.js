"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dish_1 = require("./dish");
class Dessert extends dish_1.Dish {
    constructor(price, cost, ingredients, timeToCook, slicesNumber) {
        super(price, cost, ingredients, timeToCook);
        this.slicesNumber = slicesNumber;
    }
    getSlicePrice() {
        return this.price / this.slicesNumber;
    }
    cook() {
        console.log("Baking Dessert");
    }
}
exports.Dessert = Dessert;
const brigadeiro = new Dessert(100, 20, ["leite condensado"], 100, 10);
console.log(brigadeiro.getSlicePrice());
console.log(brigadeiro.getProfit());
const pudim = new Dessert(100, 20, ["leite condensado, ovo, leite, açúcar"], 200, 8);
console.log(pudim.getSlicePrice());
console.log(pudim.getProfit());
const boloBrunna = new Dessert(75, 20, ["ovo, farinha de trigo, morango, doce de leite, castanha, leite"], 300, 18);
console.log(boloBrunna.getSlicePrice());
console.log(boloBrunna.getProfit());
//# sourceMappingURL=dessert.js.map