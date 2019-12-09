import { JSONFileManager } from "./JSONFileManager"
import UserAccount from "./index"

// Declaração
class Bank {
    //Atributos
    accounts: UserAccount[]
    fileManager:JSONFileManager

    // Métodos
    createAccount(): void {
        console.log('A sua conta foi criada com sucesso!')
    }

    getAllAcounts(): UserAccount[] {

    }

    getAccountByCpf(): UserAccount {

    }

    saveAccounts() : void {

    }
}

// Criando um instância
const bankManager: Bank = new Bank()
bankManager.createAccount() // Imprime "A sua conta foi criada com sucesso!" no console
