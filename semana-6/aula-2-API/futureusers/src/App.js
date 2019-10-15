import React, { Component } from 'react'
import UsersRegistered from './components/usersregistered/UsersRegistered'
import NewUsers from './components/newusers/NewUsers'
import axios from 'axios';
import Styled from 'styled-components' 

//Criando uma variável que recebe objetos estáticos
const usersList = [{
  user1: {
    name: "Amanda",
    email: "amanda123@gmail.com"
  },
  user2: {
    name: "Brunna",
    email: "brunna123@gmail.com"
  },
  user3: {
    name: "Daniel",
    email: "daniel123@gmail.com"
  },
}]

// Passamos a props com a lista de usuários (usersList) que está na variável, que recebe ela mesma.
//Após passar as props, ela foi chamada pela função "function  UsersRegistered" que a recebeu e portanto ficou "function  UsersRegistered(props)"
class App extends Component {
  render() {
    return (
      <div>
        <UsersRegistered usersList={usersList}/>
        <NewUsers/>
      </div>
    )
  }
}



export default App;
