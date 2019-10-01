import React from 'react';
import './App.css';
import { BigCard } from '.components/BigCard/BigCard';
import { ImageButton } from '.components/ImageButton/ImageButton';
import { PageButton } from '.components/PageButton/PageButton';
import { SmallCard } from '.components/SmallCard/SmallCard';
import { PageSection } from './components/PageSection/PageSection';
import facebook from './Imagens/facebook.png'



const bigCardApresentacao = {
  // image: , INSERIR UMA FOTO PESSOAL E FAZER O IMPORT LÁ EM CIMA 
  title: 'Brunna Rocha',
  paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim necessitatibus doloremque quam, et nobis error excepturi eveniet autem vero asperiores sunt voluptas alias obcaecati, animi ex voluptatum vitae ea impedit.'
}
​
const smallCardEmail = {
  // image: , INSERIR UMA FOTO DE UM ENVELOPE E FAZER O IMPORT LÁ EM CIMA 
  label: 'Email: ',
  email: 'brunna.17rocha03@gmail.com'
}

const smallCardEndereco = {
  label: 'Endereço: '
  endereco: 'Rua do Programador, 7'
}

function App() {
  return (
    <div className="Container">

      <BigCard image={bigCardApresentacao.image} title={bigCardApresentacao.title} paragraph={bigCardApresentacao.paragraph} />

      <SmallCard image={smallCardEmail.image} label={smallCardEmail.label} email={smallCardEmail.email} />

      <SmallCard image={smallCardEndereco.image} label={smallCardEndereco.label} endereco={smallCardEmail.email} />
      
      <div>
        <ImageButton />
      </div>
      
      <div>
        <PageButton />
      </div>

      <div>
        <PageSection />
      </div>
      
    </div>
  );
}

export default App;
