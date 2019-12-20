import express, { Request, Response } from "express";
import { AddressInfo } from 'net'
import knex from 'knex';

const app = express();
app.use(express.json()); // Linha mágica (middleware)

const connection = knex({
  client: 'mysql',
  connection: {
    host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
    user: 'brunna',
    password: process.env.SENHA_BANCO,
    database: 'brunna'
  }
}); console.log(process.env.SENHA_BANCO)

app.get('/', (req: Request, res: Response) => {
  const resposta = {
    endpoints: {
      '/': 'retorna lista com todos os endpoints',
      '/ping': 'retorna o texto pong',
      '/hello/:NAME': 'utiliza o parâmetro passado no PATH para retornar um HTML contendo o parâmetro.'
    }
  };

  // Exemplo de retorno de um JSON
  res.send(resposta)
});

app.get('/ping', (req: Request, res: Response) => {
  const hasQueryString = Object.values(req.query).length > 0;

  if (hasQueryString) {
    // Exemplo de retorno de um JSON
    res.send(req.query);
  } else {
    // Exemplo de retorno de texto "puro"
    res.send('pong (nenhuma query string foi passada)');
  }
});

app.get('/hello/:name', (req: Request, res: Response) => {
  const resposta = `<h1>Olá ${req.params.name}, seja bem-vindo(a) à Future4.</h1>`;

  // Exemplo de retorno de HTML
  res.send(resposta)
});

app.post('/mirror/:cor', (req: Request, res: Response) => {
  let responseBody;

  if (req.params.cor !== "0") {
    responseBody = { ...req.body, corPredileta: req.params.cor };
  } else {
    responseBody = { ...req.body, corPredileta: "NAO INFORMADA" };
  }

  res.send(responseBody);
});

// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
// Criando o usuário
app.post('/createUser', (req: Request, res: Response) => {
  const newUser = {
    ...req.body
  };
  const query = connection('users').insert(newUser);
  query.then(result => {
    res.send(result);
  }).catch(e => {
    res.send(e);
  })
});
// Pegando os usuários
app.get('/getAllUsers', async (req: Request, res: Response) => {
  const query = connection.select('name').from('users');
  const result = await query;
  res.send(result);
});
// Editando o usuário
app.put('/editUser/:id', async (req: Request, res: Response) => {
  const newNickName = req.body.nickname;
  const userToEdit = req.params.id;

  try {
    const query = connection('users').where('id', '=', userToEdit).update({ nick_name: newNickName });
    const result = await query;
    res.status(200).end();
  } catch (error) {
    res.status(500).send(error);
  }
  
});