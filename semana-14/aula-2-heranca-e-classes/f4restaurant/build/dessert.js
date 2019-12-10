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
exports.brigadeiro = new Dessert(100, 20, ["leite condensado, nescau, leite"], 100, 10);
exports.pudim = new Dessert(100, 20, ["leite condensado, ovo, leite, açúcar"], 200, 8);
exports.boloBrunna = new Dessert(75, 20, ["ovo, farinha de trigo, morango, doce de leite, castanha, leite"], 300, 18);
//# sourceMappingURL=dessert.js.map