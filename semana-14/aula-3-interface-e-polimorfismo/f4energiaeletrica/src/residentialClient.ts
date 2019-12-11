import { Client } from "./client"
import { Residence } from "./residence"

export class ResidentialClient extends Residence implements Client {
  public clientName: string;
  public clientNumber: number;
  public consumedEnergy: number = 0;
  
  constructor(residencialName: string, cpf: string, clientName: string, clientNumber: number) {
    super(residencialName, cpf, cep);
    this.clientName = clientName;
    this.clientNumber= clientNumber;
  } 
  public calculateBill(): Number{
    return this.consumedEnergy * 0,75;
  }
