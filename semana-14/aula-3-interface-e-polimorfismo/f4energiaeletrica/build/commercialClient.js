"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trade_1 = require("./trade");
class CommercialClient extends trade_1.Trade {
    constructor(name, cnpj, cep, clientName, clientNumber) {
        super(name, cnpj, cep);
        this.consumedEnergy = 0;
        this.clientName = clientName;
        this.clientNumber = clientNumber;
    }
    calculateBill() {
        return this.consumedEnergy * 0.53;
    }
    setConsumedEnergy(energy) {
        this.consumedEnergy = energy;
    }
}
exports.CommercialClient = CommercialClient;
//# sourceMappingURL=commercialClient.js.map