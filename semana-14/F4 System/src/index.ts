import { Student } from "./student";
import { Teacher } from "./teacher";
import { Specialty} from "./specialty";
import { Webmission } from "./webMission";


const newton: Webmission = new Webmission("Newton", "05-02-2019", "04-02-2020", [], [])
console.log(newton)

const marieCurie: any = new Student("Marie Curie", "mariecurie@uol.com", 3,12,1978, newton)
console.log(marieCurie)