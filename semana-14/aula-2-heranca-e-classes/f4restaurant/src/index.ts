import { Dish } from "./dish"
import { Cashier } from "./cashier"
import { brigadeiro, pudim, boloBrunna } from "./dessert"
import { feijoada, shawarma, falafel} from "./saltydish"

const menu: Dish[] = [brigadeiro, pudim, boloBrunna, feijoada, shawarma, falafel];

console.log(menu)
const cashier = new Cashier("Brunna", 1900)

cashier.sayJob();
console.log(cashier.bill([shawarma, boloBrunna]))