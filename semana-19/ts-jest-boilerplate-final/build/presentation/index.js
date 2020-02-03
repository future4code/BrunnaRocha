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
const UserDatabase_1 = require("../data/UserDatabase");
const BcryptService_1 = require("../business/service/cryptography/BcryptService");
const jwtAuthService_1 = require("../business/service/auth/jwtAuthService");
const V4IdGenerator_1 = require("../business/service/auth/V4IdGenerator");
const RegisterUserUC_1 = require("../business/usecases/user/RegisterUserUC");
const LoginUC_1 = require("../business/usecases/user/LoginUC");
const GetAllUsersUC_1 = require("../business/usecases/user/GetAllUsersUC");
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
const getTokenFromHeaders = (headers) => {
    return headers["auth"] || "";
};
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const createUser = new RegisterUserUC_1.RegisterUserUC(new UserDatabase_1.UserDatabase(), new BcryptService_1.BcryptService(), new V4IdGenerator_1.V4IdGenerator(), new jwtAuthService_1.JwtAuthService());
        const result = yield createUser.execute({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            birthdate: req.body.birthdate,
            age: req.body.age,
            photo: req.body.photo
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send({
            erroMessage: err.message
        });
    }
}));
app.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loginUC = new LoginUC_1.LoginUC(new UserDatabase_1.UserDatabase(), new BcryptService_1.BcryptService(), new jwtAuthService_1.JwtAuthService());
        const result = yield loginUC.execute({
            email: req.body.email,
            password: req.body.password
        });
        res.send(result);
    }
    catch (err) {
        res.status(400).send({
            erroMessage: err.message
        });
    }
}));
app.get("/getAllUsers", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllUsersUC = new GetAllUsersUC_1.GetAllUsersUC(new UserDatabase_1.UserDatabase());
        const result = yield getAllUsersUC.execute();
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send({
            errorMessage: err.message
        });
    }
}));
function authenticate(req) {
    const jwtAuthService = new jwtAuthService_1.JwtAuthService();
    return jwtAuthService.getUserIdFromToken(getTokenFromHeaders(req.headers));
}
exports.default = app;
