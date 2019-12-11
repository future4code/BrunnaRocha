"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trade_1 = require("./trade");
class commercialClient extends trade_1.Trade {
    constructor(cep, cnpj, name) {
        super(name, cnpj, cep);
        this.consumedEnergy = 0;
        this.name = name;
    }
    calculateBill() {
        return this.consumedEnergy * 0, 53;
    }
    ;
}
exports.commercialClient = commercialClient;
//# sourceMappingURL=commercialClient.js.map