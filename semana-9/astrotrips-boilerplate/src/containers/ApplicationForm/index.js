import React, { Component } from "react";
import { optionCountry } from "../ApplicationForm/Countries.js"
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

class ApplicationForm extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }


   handleSubmit = event => {
      event.preventDefault();
      alert("Usuário criado com sucesso!");
    };

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Nome:</label>
          <input required name="name" pattern="^[a-zA-Z]{3,}" />
          <label htmlFor="idade">idade:</label>
          <input required name="idade" min="18" type="number" />
          <label>
            <p>Por que você é o candidato perfeito?</p>
            <TextField
            multiline
            rows="4"
            margin="normal"
            variant="filled"
            inputProps={{  pattern: "[a-zA-Z\s\\.,]", minlength:"30"  }}
            value={this.state.applicationText} 
            onChange={this.handleInputChange}  
            />
          </label>
          <label htmlFor="profession">Profissão:</label>
          <TextField
            multiline
            rows="4"
            margin="normal"
            variant="filled"
            inputProps={{  pattern: "[a-zA-Z\s\\.,]", minlength:"10"  }}
            value={this.state.applicationText} 
            onChange={this.handleInputChange}  
            />
          <select>
            {optionCountry}
          </select>
          <Button type="submit">Submeter!</Button>
        </form>
    );
  }
}


export default ApplicationForm;
