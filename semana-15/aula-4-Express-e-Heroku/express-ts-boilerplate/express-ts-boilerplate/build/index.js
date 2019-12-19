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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const knex_1 = __importDefault(require("knex"));
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
const connection = knex_1.default({
    client: 'mysql',
    connection: {
        host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
        user: 'USUARIO',
        password: 'SENHA',
        database: 'exercicios'
    }
});
app.get('/', (req, res) => {
    const resposta = {
        endpoints: {
            '/': 'retorna lista com todos os endpoints',
            '/ping': 'retorna o texto pong',
            '/hello/:NAME': 'utiliza o parâmetro passado no PATH para retornar um HTML contendo o parâmetro.'
        }
    };
    // Exemplo de retorno de um JSON
    res.send(resposta);
});
app.get('/ping', (req, res) => {
    const hasQueryString = Object.values(req.query).length > 0;
    if (hasQueryString) {
        // Exemplo de retorno de um JSON
        res.send(req.query);
    }
    else {
        // Exemplo de retorno de texto "puro"
        res.send('pong (nenhuma query string foi passada)');
    }
});
app.get('/hello/:name', (req, res) => {
    const resposta = `<h1>Olá ${req.params.name}, seja bem-vindo(a) à Future4.</h1>`;
    // Exemplo de retorno de HTML
    res.send(resposta);
});
app.post('/mirror/:cor', (req, res) => {
    let responseBody;
    if (req.params.cor !== "0") {
        responseBody = Object.assign(Object.assign({}, req.body), { corPredileta: req.params.cor });
    }
    else {
        responseBody = Object.assign(Object.assign({}, req.body), { corPredileta: "NAO INFORMADA" });
    }
    res.send(responseBody);
});
// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
// CT - Ex1
app.get('/getAllBrazilianClients', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = connection.select('primeiro_nome')
        .from('correntistas')
        .where('pais', 'Brazil');
    const result = yield query;
    res.send(result);
}));
// CT - Ex2
app.get('/searchClientByName', (req, res) => {
    const nameToSearch = req.query.name;
    if (!nameToSearch) {
        res.status(400).end();
        return;
    }
    const query = connection.raw(`SELECT primeiro_nome FROM correntistas WHERE primeiro_nome LIKE "%${nameToSearch}%"`);
    query.then(result => {
        res.send(result);
    });
});
// CT - Ex3
app.get('/getBirthdaysAfterDate/:date', (req, res) => {
    const dateToBeCompared = req.params.date;
    const query = connection.raw(`SELECT primeiro_nome, aniversario FROM correntistas WHERE aniversario < "${dateToBeCompared}"`);
    query.then(result => {
        res.send(result);
    });
});
// CT - Ex4
app.post('/createClient', (req, res) => {
    const newCliente = Object.assign(Object.assign({}, req.body), { divida_perdoada: 0, conta_corrente: 0 });
    const query = connection('correntistas').insert(newCliente);
    query.then(result => {
        res.send(result);
    }).catch(e => {
        res.send(e);
    });
});
