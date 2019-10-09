import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }


render() {
  return (
    <div>
      <div>
        <h2>Controle de Despesas</h2>
      </div>

      <div className="valor">
        <span>Informe o valor:</span>
        <input type="text" name="valor" id="valor"/> 
      </div>

      <div className="despesa">
        <span>Tipo de despesa:</span>
        <select>
          <option value="est">Estudos</option>
          <option value="laz">Lazer</option>
          <option value="ali">Alimentação</option>
          <option value="pes">Pessoal</option>
        </select>
      </div>


      <div className="descricao">
        <span>Descrição:</span>
        <input type="text" name="descricao" id="descricao"/>
      </div>

    </div>
  );
}

}

export default App;
