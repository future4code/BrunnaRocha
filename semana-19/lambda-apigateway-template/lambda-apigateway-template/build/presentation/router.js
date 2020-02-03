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
class ApiRouter {
    static handleRoute(path, event) {
        return __awaiter(this, void 0, void 0, function* () {
            // Para testar o helloWorld, bata no endpoint: url/helloWorld
            switch (path) {
                case "helloWorld":
                    return {
                        message: "Hello World"
                    };
                default:
                    throw new Error("Rota não existe");
            }
        });
    }
}
exports.ApiRouter = ApiRouter;
