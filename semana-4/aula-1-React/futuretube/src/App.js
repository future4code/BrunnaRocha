import React from 'react';
import './App.css';
import foto1 from "./imagens/foto1.png";
import foto2 from "./imagens/foto2.png";
import foto3 from "./imagens/foto3.png";
import foto4 from "./imagens/foto4.png";
import foto5 from "./imagens/foto5.png";
import foto6 from "./imagens/foto6.png";

function App() {
  return (
    <div className="container">
      <header>
        <h2>FutureTube</h2>
        <form action="http://soter.ninja/form-viewer/">
            <input name="text" placeholder="Buscar" />
        </form>
      </header>
        <div id="aside-e-section">
            <aside>
                <ul class="menulateralesquerdo">
                    <li>Início</li> 
                    <li>Em alta</li> 
                    <li>Inscrições</li> 
                    <li>Originais</li> 
                    <hr/>
                    <li>Biblioteca</li> 
                    <li>Histórico</li>
                </ul>
            </aside>

            <section class="primeiraSessao">
                <div>
                    <img src= {"https://picsum.photos/200/200?v=algumacoisa" + new Date().getTime()} alt="imagem de um barquinho" />
                    <a href="videoUm.html">
                        <p> Imagem 1 </p>
                    </a>
                </div>
                <div>
                    <img src= {foto2} alt="imagem de um porto" />
                    <p>Quase um paraíso</p>
                </div>
                <div>
                    <img src= {foto3} alt="imagem de uma noite estrelada" />
                    <p>Noite feliz</p>
                </div>
                <div>
                    <img src= {foto4} alt="imagem de cabos de internet" />
                    <p>Cabo, Desligo!</p>
                </div>
                <div>
                    <img src= {foto5} alt="imagem de um limão cheio de poros" />
                    <p>Poros Everywhere!</p>
                </div>
                <div>
                    <img src= {foto6} alt="imagem de uma floresta na Rússia" />
                    <p>Hello Russia!</p>
                </div>
                <div>
                    <img  src= {"https://picsum.photos/200/200?v=outracoisa" + new Date().getTime()} />
                    <p>Imagem 4!</p>
                </div>
                <div>
                    <img src= {"https://picsum.photos/200/200?v=coisinha" + new Date().getTime()} />
                    <p>Imagem 5!</p>
                </div>
            </section>
        </div>
      <footer>
        <h1>Oi! Eu moro no Footer!</h1>
      </footer>
    </div>
  );
}

export default App;
