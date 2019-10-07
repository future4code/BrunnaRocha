import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="App">
      
      <div class="container">
          <form action="#" id="task-form">
          <label>Insira uma tarefa:</label>
          <input type="text" name="task" id="task">
          </form>
          <select name="diaDaSemana" id="diaDaSemana">
              <option value="segunda">Segunda-Feira</option>
              <option value="terca">Terça-Feira</option>
              <option value="quarta">Quarta-Feira</option>
              <option value="quinta">Quinta-Feira</option>
              <option value="sexta">Sexta-Feira</option>
              <option value="sabado">Sábado</option>
              <option value="domingo">Domingo</option>
          </select>

          <button onclick="creatTask();">Criar Tarefa!</button>
      </div>

      <hr>

      <main>
        <div id="segunda">
            Segunda-feira
            <ul class="content"></ul>
        </div>
        <div id="terca">
            Terça-Feira
            <ul class="content"></ul>
        </div>
        <div id="quarta">
            Quarta-Feira
            <ul class="content"></ul>
        </div>
        <div id="quinta">
            Quinta-Feira
            <ul class="content"></ul>
        </div>
        <div id="sexta">
            Sexta-Feira
            <ul class="content"></ul>
        </div>
        <div id="sabado">
            Sábado
            <ul class="content"></ul>
        </div>
        <div id="domingo">
            Domingo
            <ul class="content"></ul>
        </div>
      </main>

  
    </div>
    
  );
}

export default App;
