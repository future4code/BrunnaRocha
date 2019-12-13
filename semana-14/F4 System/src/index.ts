import { Student } from "./student";
import { Teacher } from "./teacher";
import { Mission } from "./mission";
import { Specialty} from "./specialty"



// const user1 : string = new Student ("Brunna", "bru@bru.com", 17,3,1996, "Newton")

// const team : Mission = new Mission ("Newton")

const teacher1: Teacher = new Teacher ("Bolinha", "bolinha@uol.com", 15,7,1965, [Specialty.HTML, Specialty.CSS, Specialty.JS]) 
console.log(teacher1)