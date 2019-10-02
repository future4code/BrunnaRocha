import React from 'react';
import img1 from './img1.jpg';
import './App.css';


  function App() {
    return (
      <div className="App">
        <h3>future4.br</h3>
        <img src={img1} className="img-1" alt="Brunna" />
        <input id="comentario-btn"
          placeholder="Escreva um comentário"
          type="text"
          // onChange={this.onChangeValue1}
          // value={this.state.valor1}
        />
      </div>
    );
  }

export default App;
