import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className="primeiraEtapa">
        <span>Nome</span>
        <input type="text" name="nome" id="nome"/> 

        <span>Idade</span>
        <input type="text" name="idade" id="idade"/>

        <span>E-mail</span>
        <input type="text" name="email" id="email"/>

        <span>Grau de escolaridade</span>
        <input type="text" name="escolaridade" id="escolaridade"/>
        <ul>
          <li>Ensino Médio Incompleto</li>
          <li>Ensino Médio Completo</li>
          <li>Ensino Superior Incompleto</li>
          <li>Ensino Superior Completo</li>
        </ul>
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

export default App;
