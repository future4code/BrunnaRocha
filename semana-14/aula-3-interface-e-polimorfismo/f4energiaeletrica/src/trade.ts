// Este arquivo tem 3 propriedades: nome, cnpj e 
// o cep ( recebido do arquivo Place que é a classe pai).
import { Place } from "./place";

export class Trade extends Place {
    public name: string;
    // Refere-se ao nome do cliente comercial

    public cnpj: string;
    // Refere-se ao número de registro da empresa

    public cep: string;

    constructor(name: string, cnpj: string, cep: string) {
        super(cep);
        this.name = name;
        this.cnpj = cnpj;
    }
}
