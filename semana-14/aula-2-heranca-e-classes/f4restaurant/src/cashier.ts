import { Employee } from "./employee"
import { Dish } from "./dish"


export class Cashier extends Employee {
    constructor(name: string, salary: number){
        super(name, salary);
    }

    public bill():(dishes: Dish[]): number {
        const comanda = dishes
        let total = 0
        const calculateBill: number[] = dishes.forEach(dishes.price)
        return
    }

    public sayJob(): void {
        console.log("Oi, eu sou a caixa registradora!")
    }
}