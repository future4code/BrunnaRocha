import { Dish } from "./dish";

export class Dessert extends Dish {
  public slicesNumber: number;
  constructor(
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number,
    slicesNumber: number
  ) {
    super(price, cost, ingredients, timeToCook);
    this.slicesNumber = slicesNumber;
  }

  public getSlicePrice(): number {
    return this.price / this.slicesNumber;
  }

  public cook(): void {
    console.log("Baking Dessert");
  }
}

const brigadeiro = new Dessert(100, 20, ["leite condensado"], 100, 10);
console.log(brigadeiro.getSlicePrice());
console.log(brigadeiro.getProfit());

const pudim = new Dessert(100, 20, ["leite condensado, ovo, leite, açúcar"], 200, 8);
console.log(pudim.getSlicePrice());
console.log(pudim.getProfit());

const boloBrunna = new Dessert(75, 20, ["ovo, farinha de trigo, morango, doce de leite, castanha, leite"], 300, 18);
console.log(boloBrunna.getSlicePrice());
console.log(boloBrunna.getProfit());
