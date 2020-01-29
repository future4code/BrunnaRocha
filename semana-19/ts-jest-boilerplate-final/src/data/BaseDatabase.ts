import knex from 'knex'

export abstract class BaseDatabase {
  protected connection = knex({
    client: "mysql",
    connection: {
      host: 'ec2-100-26-186-8.compute-1.amazonaws.com',
      user: 'BrunnaRocha17',
      password: process.env.PASSWORD_DATABASE,
      database: 'myprodastromatch' ,
      debug: true  
  }
  });

  getSQLDateFromTSDate = (date: Date): string => date.toISOString().split('T')[0]
}