import React from 'react';
import './App.css';
import { BigCard } from '.components/BigCard/BigCard';
import { ImageButton } from '.components/ImageButton/ImageButton';
import { PageButton } from '.components/PageButton/PageButton';
import { SmallCard } from '.components/SmallCard/SmallCard';


function App() {
  return (
    <div className="App">
      <BigCard />
      <ImageButton />
      <PageButton />
      <SmallCard />
    </div>
  );
}

export default App;
