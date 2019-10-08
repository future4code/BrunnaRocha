import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <span>Nome</span>
      <input type="text" name="nome" id="nome"/> 
      <span>Idade</span>
      <input type="number" name="idade" id="idade"/>
      <span>E-mail</span>
      <input type="text" name="email" id="email"/>
      <span>Grau de escolaridade</span>
      <input type="text" name="escolaridade" id="escolaridade"/>
    </div>
  );
}

export default App;
