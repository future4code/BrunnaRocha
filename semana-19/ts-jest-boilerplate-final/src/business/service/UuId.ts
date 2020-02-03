import { v4 } from 'uuid'
import { IdGeneratorGateway } from '../gateways/IdGeneratorGateway'


export class generateRandomId implements IdGeneratorGateway {
    generateId() {
        return v4();
    }
}