"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class generateRandomId {
    generate() {
        return uuid_1.v4();
    }
}
exports.generateRandomId = generateRandomId;
