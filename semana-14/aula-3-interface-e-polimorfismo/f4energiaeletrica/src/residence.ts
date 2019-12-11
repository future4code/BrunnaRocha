// Este arquivo tem 3 propriedades: nome, cpf e 
// o cep ( recebido do arquivo Place que é a classe pai).

import { Place } from "./place";

export class Residence extends Place {
  constructor(
    public name: string,
    // Refere-se ao nome da indústria

    public cpf: string,
    // Refere-se ao número de registro da empresa

    cep: string
  ) {
    super(cep);
  }
}
