"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
class BaseDatabase {
    constructor() {
        this.connection = knex_1.default({
            client: "mysql",
            connection: {
                host: 'ec2-100-26-186-8.compute-1.amazonaws.com',
                user: 'BrunnaRocha17',
                password: process.env.PASSWORD_DATABASE,
                database: 'myprodastromatch',
                debug: true
            }
        });
        this.getSQLDateFromTSDate = (date) => date.toISOString().split('T')[0];
    }
}
exports.BaseDatabase = BaseDatabase;
