// Este arquivo tem 3 propriedades: nome, cnpj e 
// o cep ( recebido do arquivo Place que é a classe pai).
import { Place } from "./place";

export class Trade extends Place {
  constructor(
    public name: string,
    // Refere-se ao nome da indústria

    public cnpj: string,
    // Refere-se ao número de registro da empresa

    cep: string
  ) {
    super(cep);
  }
}
