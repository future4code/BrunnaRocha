import * as moment from "moment";
import { writeFile, readFile } from "fs"

// Declaração
class UserAccount {
    //Atributos
    balance: number
    cpf: string
    name: string
    age: number
    // transactions: Transaction[]

    // Métodos
    getBalance(): void {
        console.log('O seu extrato é de R$ ')
    }

    addBalance(value: number): void {
        this.balance +=  value
    }
}

// Criando um instância
const userManager: UserAccount = new UserAccount()
userManager.getBalance() // Imprime "O seu extrato é de R$ " no console

export default UserAccount;