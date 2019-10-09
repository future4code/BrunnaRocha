import React from 'react';
import './App.css';
import botaoDeNavegacao from './Components/botaoDeNavegacao'
import Styled from 'styled-components'


const Body = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        apareceTelaExtrato: false
    }
  }

    trocarTelaInicial= () => {
      const telaInicial = true
      this.setState ({apareceTelaExtrato: telaInicial})
    }

render() {
  const telaAtual = this.state.apareceTelaExtrato ? (<Extrato />) : (<Cadastro />
  
  )

  return (
    <Cadastro/>

    <Extrato />
    
    <Body>
      <Botao onClick={this.trocarTelaInicial}></Botao>
    </Body>
      {/* <div>
        <h2>Controle de Despesas</h2>
      </div>

      <div className="valor">
        <span>Informe o valor:</span>
        <input type="text" name="valor" id="valor"/> 
      </div>

      <div className="despesa">
        <span>Tipo de despesa:</span>
        <select>
          <option value="Estudos">Estudos</option>
          <option value="Lazer">Lazer</option>
          <option value="Alimentacao">Alimentação</option>
          <option value="Pessoal">Pessoal</option>
        </select>
      </div>


      <div className="descricao">
        <span>Descrição:</span>
        <input type="text" name="descricao" id="descricao"/>
      </div> */}
  );
}

}

export default App;
