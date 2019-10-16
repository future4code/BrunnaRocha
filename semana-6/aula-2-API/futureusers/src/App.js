import React from 'react';
import Signup from './components/Signup.js';
import Styled from 'styled-components'; 
import axios from 'axios';


const userToSignup = {
    name: "Emmanuel",
    email: "Godwithus@gmail.com"
  }

const userList = [
  {
    id: "id1",
    name: "Emmanuel"
  }
]  

function App() {
    return (
      <div>
        <Signup/>
      </div>
    );
}



export default App;
