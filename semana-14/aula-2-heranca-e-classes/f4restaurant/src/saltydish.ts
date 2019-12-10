import { Dish } from "./dish";

export class SaltyDish extends Dish {
  constructor(
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number
  ) {
    super(price, cost, ingredients, timeToCook);
  }

  public cook(): void {
    console.log("Starting Salty Dish")
  }
}

const feijoada = new SaltyDish(25, 13, ["arroz branco, couve, carne de porco, feijão preto"], 500);
console.log(feijoada.getProfit());

const shawarma = new SaltyDish(25, 9, ["pão pita, carne, frango, tomate, zaatar, purê de batata"], 100);
console.log(shawarma.getProfit());

const falafel = new SaltyDish(19, 6, ["gão de bico, salsinha, coentro, azeite"], 100);
console.log(falafel.getProfit());