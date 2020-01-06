import { Client } from "./client"
import { Trade } from "./trade"

export class CommercialClient extends Trade implements Client {
  public clientName: string;
  public clientNumber: number;
  public consumedEnergy: number = 0;
  
  constructor(name: string, cnpj: string, cep: string, clientName:string, clientNumber: number){
    super(name, cnpj, cep);
    this.clientName = clientName;
    this.clientNumber = clientNumber;
  } 

  public calculateBill(): number{
    return this.consumedEnergy * 0.53;
  }

  public setConsumedEnergy(energy: number): void {
    this.consumedEnergy = energy;
  }
} 
