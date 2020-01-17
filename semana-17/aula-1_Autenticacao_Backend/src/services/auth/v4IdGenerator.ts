import { v4 } from 'uuid';
import { IdGeneratorGateway } from './../../business/gateways/user/IdGeneratorGateway';
​
export class V4IdGenerator implements IdGeneratorGateway{
    generateId(): string {
        return v4()
    }
}