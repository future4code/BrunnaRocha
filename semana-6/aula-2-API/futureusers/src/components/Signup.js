import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

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
          name: "",
          email: ""   
        }
    }

    onSaveClick = () => {
        const user = {
            name: this.state.name,
            email: this.state.email
        }
        console.log(user)
        axios.post(
            "https://us-central1-future4-users.cloudfunctions.net/api/users/createUser",
            user,
            {
                headers:{
                    "api-token": "32382399c21f8450ed2efe9b44135bb5"
                }
            }
        ).then((res) => {
            window.alert("Usuário salvo com sucesso!")
        })
    }

    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    
    render() {
        return (
            <SignupContainer>
                <input value={ this.state.name } onChange={ this.onNameChange } placeholder= "Nome" type="text"/>
                <input value={ this.state.email } onChange={ this.onEmailChange } placeholder= "Email" type="text"/>
                <button onClick={ this.onSaveClick}> Salvar </button>
            </SignupContainer>
        )
    }
}


export default Signup;