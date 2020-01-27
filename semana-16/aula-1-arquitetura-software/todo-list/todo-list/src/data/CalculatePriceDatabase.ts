import knex from 'knex'
import {ClientOrder} from '../business/entities/ClientOrder'

interface ClientOrderModel {
  id: string
  name: string
  email: string
  paper: string
  size: string
  borderType: string
  borderSize: string
}

export class CalculatePriceDatabase {
    private connection: knex
  
    constructor() {
      this.connection = knex({
        client: 'mysql',
        connection: {
          host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
          user: 'brunna',
          password: 'teste',
          database: 'aulas_arquitetura'
        }
      })
    }
    
      async saveOrder(clientOrder: ClientOrder): Promise<void> {
        const databaseModel: ClientOrderModel = {
          id: clientOrder.getId(),
          name: clientOrder.
          email: clientOrder.
          paper: clientOrder.
          size: clientOrder.
          borderType: clientOrder.
          borderSize: clientOrder.
        }
      }
    }
    