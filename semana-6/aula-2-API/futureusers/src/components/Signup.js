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
    
    render() {
        return (
            <SignupContainer>
                <input placeholder= "Nome" type="text"/>
                <input placeholder= "Email" type="text"/>
                <button>Salvar</button>
            </SignupContainer>
        )
    }
}

export default Signup;