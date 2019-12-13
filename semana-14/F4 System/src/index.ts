import { Student } from "./student";
import { Teacher } from "./teacher";
import { Mission } from "./mission";
import { Specialty} from "./specialty";
import { Webmission } from "./webMission";


const teacher1: Teacher = new Teacher ("Bolinha", "bolinha@uol.com", 15,7,1965, [Specialty.HTML, Specialty.CSS, Specialty.JS]) 
console.log(teacher1)

const newton: Webmission = new Webmission("Newton", "05-02-2019", "04-02-2020", [], [])
console.log(newton)

const marieCurie: any = new Student("Marie Curie", "mariecurie@uol.com", 3,12,1978, newton)
console.log(marieCurie)