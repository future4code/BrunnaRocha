import { Client } from "./client"
import { Industry } from "./industry";

export class IndustryClient extends Industry implements Client {
  public clientName: string;
  public clientNumber: number;
  public consumedEnergy: number = 0;
  
  constructor(industryName: string, industryNumber: string, cep: string, clientName:string, clientNumber: number){
    super(industryName, industryNumber, cep);
    this.clientName = clientName;
    this.clientNumber = clientNumber;
  } 

  public calculateBill(): number{
    return this.consumedEnergy * 0.45;
  }

  public setConsumedEnergy(energy: number): void {
    this.consumedEnergy = energy;
  }
} 