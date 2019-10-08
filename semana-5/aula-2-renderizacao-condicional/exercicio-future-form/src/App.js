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
      
      <div className="primeiraEtapa">
        <h1>ETAPA I - Dagos gerais</h1>
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
        <h1>ETAPA II - Informações educacionais para quem está cursando (ou já terminou) o ensino superior</h1>
        <span>Qual o curso?</span>
        <input type="text" name="curso" id="curso"/>

        <span>Qual a unidade de ensino?</span>
        <input type="text" name="unidadeensino" id="unidadeensino"/>
      </div>

      <div className="terceiraEtapa">
        <h1>ETAPA III - Informações sobre quem não se formou no ensino superior nem está cursando</h1>
        <span>Por que você não terminou um curso de graduação?</span>
        <input type="text" name="graduacaoincompleta" id="graduacaoincompleta"/>

        <span>Você fez algum curso complementar?</span>
        <input type="text" name="cursocomplementar" id="cursosomplementar"/>
        <select>
          <option value="ct">Curso técnico</option>
          <option value="ci">Curso de inglês</option>
          <option value="ncc">Não fiz nem curso complementar</option>
        </select>
      </div>

      <div className="ultimaEtapa">
        <h1>ETAPA FINAL</h1>
        <p>Obrigado por responder às nossas perguntas! Não se preocupe, entraremos em contato em breve, via e-mail.</p>
      </div>
    </div>
  );
}

}

export default App;
