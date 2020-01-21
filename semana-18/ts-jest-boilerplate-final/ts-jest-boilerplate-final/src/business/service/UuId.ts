import { v4 } from 'uuid'
import { idGateway } from '../gateways/IdGeneratorGateway'


export class generateRandomId implements idGateway {
    generate() {
        return v4();
    }
}