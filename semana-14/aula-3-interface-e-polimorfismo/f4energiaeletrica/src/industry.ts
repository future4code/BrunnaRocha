// Este arquivo tem 3 propriedades: cep (recebido do arquivo Place que é a classe pai),
// nome e número da indústria.
import { Place } from "./place";

export class Industry extends Place {

  public industryName: string;
  // Refere-se ao nome da indústria

  public industryNumber: string;
  // Refere-se ao número de registro da empresa

  public cep: string;

  constructor(industryName: string, industryNumber: string, cep: string) {
    super(cep);
    this.industryName = industryName;
    this.industryNumber = industryNumber;
  }
}
