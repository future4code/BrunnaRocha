// Este arquivo tem 3 propriedades: nome, número e consumo de energia do cliente
// e um método que calcula o valor da conta deste cliente.
export interface Client {
  //propriedades
  clientName: string;
  // Refere-se ao nome do cliente

  clientNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  //método
  calculateBill(): number;
  // Retorna o valor da conta em reais
}
