import { Client } from "./client"
import { Trade } from "./trade"

export class commercialClient extends Trade implements Client {
  public name: string;
  public clientName: string;
  public clientNumber: number;
  public consumedEnergy: number = 0;
  
  constructor(cep: string, cnpj: string, name: string) {
    super(name, cnpj, cep);
    this.name = name;
  } 
  public calculateBill(): number{
    return this.consumedEnergy * 0,53;
  };
