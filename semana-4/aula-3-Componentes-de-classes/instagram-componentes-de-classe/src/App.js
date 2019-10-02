import React from 'react';
import './App.css';
import { Post } from './components/post/Post'


  function App() {
    return (
      <div className="App">
        <h3>future4.br</h3>
          <div>
          <Post/>
          <Post/>
          <Post/>
        </div>
      </div>
    );
  }

export default App;
