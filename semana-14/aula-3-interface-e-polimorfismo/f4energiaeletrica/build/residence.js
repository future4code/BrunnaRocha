"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const place_1 = require("./place");
class Residence extends place_1.Place {
    constructor(residentialName, cpf, cep) {
        super(cep);
        this.residentialName = residentialName;
        this.cpf = cpf;
    }
}
exports.Residence = Residence;
//# sourceMappingURL=residence.js.map