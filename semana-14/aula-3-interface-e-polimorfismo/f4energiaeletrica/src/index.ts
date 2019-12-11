import { ResidentialClient } from "./residentialClient";
import { CommercialClient } from "./commercialClient";
import { IndustrialClient } from "./industrialClient";

// Teste de criação de cliente da ResidentialClient
const client1 = new ResidentialClient("Rocha's House", "123.456.798-98", "12345-678", "Brunna", 1);
const client2 = new ResidentialClient("Ramalho's House", "987.654.321-21", "98765-432", "Eliseu", 2)

console.log(client1);
console.log(client2);

client1.setConsumedEnergy(26);
client2.setConsumedEnergy(32);

console.log(client1);
console.log(client2);

console.log("O valor da sua conta é de: R$", client1.calculateBill())
console.log("O valor da sua conta é de: R$", client2.calculateBill())

// Teste de criação de cliente da CommercialClient
const clientcomm1 = new CommercialClient("Rocha's Tower", "123456789/0001", "01234-567", "Brunna", 123);
const clientcomm2 = new CommercialClient("Ramalho's Tower", "987654321/0001", "09874-321", "Rocha's Tower", 456);

console.log(clientcomm1);
console.log(clientcomm2);

clientcomm1.setConsumedEnergy(14);
clientcomm2.setConsumedEnergy(21);

console.log("O valor da sua conta é de: R$", clientcomm1.calculateBill())
console.log("O valor da sua conta é de: R$", clientcomm2.calculateBill())

// Teste de criação de cliente da IndustrialClient
const clientindust1 = new IndustrialClient("Rock's Company", "03022019", "15975-321", "Rocha", 17);
const clientindust2 = new IndustrialClient("Ramalho's Company", "02022019", "35715-123", "Ramalho", 13); 

console.log(clientindust1);
console.log(clientindust2);

clientindust1.setConsumedEnergy(3);
clientindust2.setConsumedEnergy(30);

console.log("O valor da sua conta é de: R$", clientindust1.calculateBill());
console.log("O valor da sua conta é de: R$", clientindust2.calculateBill());