import React from 'react';

import './App.css';
import { Imagens } from './components/Imagens/Imagens'


  function App() {
    return (
      <div className="App">
        <h3>future4.br</h3>
        <Imagens />
        <Imagens />
        <Imagens />
        <input id="comentario-btn"
          placeholder="Escreva um comentário"
          type="text"
        />
      </div>
    );
  }

export default App;
