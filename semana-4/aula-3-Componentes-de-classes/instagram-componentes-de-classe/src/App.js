import React from 'react';
import './App.css';
import { Post } from './components/post/Post'
import img1 from './imagens/img1.jpg';
import img2 from './imagens/img2.jpg';
import img3 from './imagens/img3.jpg';


  function App() {
    return (
      <div className="App">
        <h3>future4.br</h3>
          <div className="postContainer">
            <Post url={img1} />
            <Post url={img2} />
            <Post url={img3} />
          </div>
      </div>
    );
  }

export default App;
