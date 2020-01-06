"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const residence_1 = require("./residence");
class ResidentialClient extends residence_1.Residence {
    constructor(residentialName, cep, cpf, clientName, clientNumber) {
        super(residentialName, cpf, cep);
        this.consumedEnergy = 0;
        this.clientName = clientName;
        this.clientNumber = clientNumber;
    }
    calculateBill() {
        return this.consumedEnergy * 0.75;
    }
    setConsumedEnergy(energy) {
        this.consumedEnergy = energy;
    }
}
exports.ResidentialClient = ResidentialClient;
//# sourceMappingURL=residentialClient.js.map