"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const industry_1 = require("./industry");
class IndustrialClient extends industry_1.Industry {
    constructor(industryName, industryNumber, cep, clientName, clientNumber) {
        super(industryName, industryNumber, cep);
        this.consumedEnergy = 0;
        this.clientName = clientName;
        this.clientNumber = clientNumber;
    }
    calculateBill() {
        return this.consumedEnergy * 0.45;
    }
    setConsumedEnergy(energy) {
        this.consumedEnergy = energy;
    }
}
exports.IndustrialClient = IndustrialClient;
//# sourceMappingURL=IndustrialClient.js.map