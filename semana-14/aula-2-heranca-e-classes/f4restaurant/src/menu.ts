import { SaltyDish } from "./saltydish";
import { Dish } from "./dish";

export abstract class Menu extends Dish {
    dessert: string[];
    salty: string[]
  
    constructor(price: number, cost: number, ingredients: string[], timeToCook: number){
        super(price, cost, ingredients, timeToCook)
    }
      
    
}