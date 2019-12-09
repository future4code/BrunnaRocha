"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const fs_1 = require("fs");
const args = process.argv.slice(2);
const action = args[0];
const userParam = args.slice(1);
switch (action) {
    case "new":
        if (userParam.length === 3) {
            const object = treatUserAccountObj(userParam);
            createAccount(object);
        }
        else {
            console.log(`Número de parâmetros incorreto. Exemplo: "Nome" "CPF" "Data de nascimento: 31/12/2010"`);
        }
        break;
    case "showAll":
        const promise = getAllAccounts();
        promise.then((resolve) => { console.log(resolve); });
        break;
    case "balance":
        getBalance(userParam);
        break;
    case "add":
        addBalance(userParam);
        break;
    default:
        console.log("Comando inválido");
        break;
}
function writeFileBank(array) {
    return new Promise((resolve, reject) => {
        fs_1.writeFile('userData.json', JSON.stringify(array), "utf-8", (err) => {
            if (err)
                reject(err);
            resolve();
        });
    });
}
function createAccount(account) {
    return __awaiter(this, void 0, void 0, function* () {
        if (Number(account.birthDate.format("YYYY")) <= 2001) {
            const allAccounts = yield getAllAccounts();
            const filterAccount = allAccounts.filter((acc) => { return acc.cpf === account.cpf; });
            if (filterAccount.length === 0) {
                allAccounts.push(account);
                try {
                    yield writeFileBank(allAccounts);
                    console.log("Conta criada com sucesso!");
                }
                catch (err) {
                    console.log(err);
                }
            }
            else {
                console.log("CPF já existe");
            }
        }
        else {
            console.log("Você não é maior de idade, portanto, não poderá ter a sua conta criada!");
        }
    });
}
function getBalance(userParam) {
    return __awaiter(this, void 0, void 0, function* () {
        const name = userParam[0];
        const cpf = userParam[1];
        const allAccounts = yield getAllAccounts();
        const filterAccount = allAccounts.filter((acc) => { return acc.cpf === cpf && acc.name === name; });
        if (filterAccount.length > 0) {
            console.log('\x1b[33m%s\x1b[0m', `Saldo: R$ ${filterAccount[0].balance},00`);
        }
        else {
            console.log('\x1b[31m%s\x1b[0m', "Não encontramos sua conta.");
        }
    });
}
function addBalance(userParam) {
    return __awaiter(this, void 0, void 0, function* () {
        const name = userParam[0];
        const cpf = userParam[1];
        const value = parseInt(userParam[2]);
        const allAccounts = yield getAllAccounts();
        const updatedAllAccounts = allAccounts.map(acc => {
            if (acc.name === name && acc.cpf == cpf) {
                return Object.assign(Object.assign({}, acc), { balance: parseInt(acc.balance) + value });
            }
            else {
                return acc;
            }
        });
        try {
            yield writeFileBank(updatedAllAccounts);
            console.log("Seu saldo foi atualizado com sucesso!");
        }
        catch (err) {
            console.log('\x1b[31m%s\x1b[0m', "Não encontramos sua conta.");
        }
    });
}
function getAllAccounts() {
    return new Promise((resolve, reject) => {
        fs_1.readFile('userData.json', 'utf8', (err, data) => {
            if (err) {
                console.error("Não foi possível encontrar o arquivo.");
                reject(err);
            }
            else {
                resolve(JSON.parse(data));
            }
        });
    });
}
function treatUserAccountObj(param) {
    const object = {
        name: param[0],
        cpf: param[1],
        birthDate: moment(param[2], "DD/MM/YYYY"),
        balance: 0,
    };
    return object;
}
//# sourceMappingURL=index.js.map