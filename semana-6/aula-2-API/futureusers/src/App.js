import React from 'react';
import Signup from './components/Signup.js';
import UserList from './components/UserList.js'





class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       currentPage: "signup",
       buttonText: "Lista de Usuários"
    }
  }

  onButtonClick = () => {
    if(this.state.currentPage === "signup") {
      this.setState({
        currentPage: "userList",
        buttonText: "Voltar"
      })
    } else {
      this.setState({
        currentPage: "signup",
        buttonText: "Lista de Usuários"
      }) 
    }
  }  
  

    render () {
    return (
      <div>
        {
          this.state.currentPage === "signup" ? <Signup/> : <UserList/>
        }
        <button onClick={ this.onButtonClick }>{ this.state.buttonText }</button>
      </div>
    );
  }  
}



export default App;
