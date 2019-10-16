import React, { Component } from 'react'
import styled from 'styled-components'

const userToSignup = {
    name: "Emmanuel",
    email: "Godwithus@gmail.com"
}


const SignupContainer = styled.div `
    width: 40%;
    display: flex;
    flex-direction: column;
` 

 class Signup extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    onSaveClick = () => {
        window.alert("Usuário salvo com sucesso!")
    }
    
    render() {
        return (
            <SignupContainer>
                <input placeholder= "Nome" type="text"/>
                <input placeholder= "Email" type="text"/>
                <button onClick={ this.onSaveClick}>Salvar</button>
            </SignupContainer>
        )
    }
}

export default Signup;