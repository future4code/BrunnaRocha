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
          <label htmlFor="name">Name:</label>
          <input required name="name" pattern="^[a-zA-Z]{3,}" />
          <label htmlFor="idade">age:</label>
          <input required name="idade" min="18" type="number" />
          <label htmlFor="application">Application:</label>
          <input required name="applicationText" pattern="^[a-zA-Z]{30,}" type="textarea" />
          <label htmlFor="profession">Profession:</label>
          <input required name="profession" pattern="^[a-zA-Z]{30,}" type="textarea" />
          <label htmlFor="id">Id:</label>
          <input required name="id" type="text" />
          <select>
            {optionCountry}
          </select>
          <Button type="submit">Submeter!</Button>
        </form>
    );
  }
}


export default ApplicationForm;
