import { Client } from "./client"
import { Residence } from "./residence"

export class ResidentialClient extends Residence implements Client {
  public clientName: string;
  public clientNumber: number;
  public consumedEnergy: number = 0;
  
  constructor(residentialName: string, cep: string, cpf: string, clientName: string, clientNumber: number) {
    super(residentialName, cpf, cep);
    this.clientName = clientName;
    this.clientNumber= clientNumber;
  } 
  public calculateBill(): number{
    return this.consumedEnergy * 0,75;
  };
