// Este arquivo tem 3 propriedades: nome, cpf e 
// o cep ( recebido do arquivo Place que é a classe pai).
import { Place } from "./place";

export class Residence extends Place {
    public residenceName: string;
    // Refere-se ao nome da residência

    public cpf: string;
    // Refere-se ao número de registro do cliente

    public cep: string;

    constructor(residenceName: string, cpf: string, cep: string){
      super(cep);
      this.residenceName = residenceName;
      this.cpf = cpf;
    }
}
