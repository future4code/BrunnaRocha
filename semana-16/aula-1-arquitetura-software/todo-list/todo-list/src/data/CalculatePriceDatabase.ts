import knex from 'knex'
import {Task} from '../business/entities/Task'

export class CalculatePriceDatabase {
    private connection: knex
    private taskEntityMapper: TaskEntityMapper
  
    constructor() {
      this.connection = knex({
        client: 'mysql',
        connection: {
          host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
          user: 'darvas',
          password: 'teste',
          database: 'aulas_arquitetura'
        }
      })
  
      this.taskEntityMapper = new TaskEntityMapper()
    }

    async createTask(task: Task) {
        await this.connection('tasks').insert(this.taskEntityMapper.entityToModel(task))
      }
    
      async getTasksByUserId(userId: string): Promise<Task[]> {
        const results: TaskModel[] = await this.connection.raw(`
          SELECT * FROM tasks
          JOIN users ON users.id=tasks.responsible_user_id
          WHERE users.id="${userId}";
        `).then(res => {
          return res[0]
        })
    
        return results.map((result) => this.taskEntityMapper.modelToEntity(result))
      }
    }
    