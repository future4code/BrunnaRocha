import React from 'react';
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
      <h1>ETAPA I - DADOS GERAIS</h1>
      <div className="primeiraEtapa">
        <span>Qual o seu nome?</span>
        <input type="text" name="nome" id="nome"/> 

        <span>Qual é a sua idade?</span>
        <input type="text" name="idade" id="idade"/>

        <span>Qual é o seu E-mail?</span>
        <input type="text" name="email" id="email"/>

        <span>Qual é o seu grau de escolaridade?</span>
        <input type="text" name="escolaridade" id="escolaridade"/>
        <select>
          <option value="emi">Ensino Médio Incompleto</option>
          <option value="emc">Ensino Médio Completo</option>
          <option value="esi">Ensino Superior Incompleto</option>
          <option value="esc">Ensino Superior Completo</option>
        </select>
        {/* <button onClick={this.handleClick}></button> */}
      </div>

      <div className="SegundaEtapa">
        <span>Qual o curso?</span>
        <input type="text" name="curso" id="curso"/>

        <span>Qual a unidade de ensino?</span>
        <input type="text" name="unidadeensino" id="unidadeensino"/>
      </div>

      <div className="terceiraEtapa">
        <span>Por que você não terminou um curso de graduação?</span>
        <input type="text" name="graduacaoincompleta" id="graduacaoincompleta"/>

        <span>Você fez algum curso complementar?</span>
        <input type="text" name="cursocomplementar" id="cursosomplementar"/>
        <ul>
          <li>Curso técnico</li>
          <li>Curso de inglês</li>
          <li>Não fiz nem curso complementar</li>
        </ul>
      </div>
    </div>
  );
}

}

export default App;
