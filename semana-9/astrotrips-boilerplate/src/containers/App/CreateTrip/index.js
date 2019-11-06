import React, { Component } from "react";
import Button from "@material-ui/core/Button";



class CreateTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    alert("Viagem criada com sucesso!");
  };


    render() {
      return (
          <form onSubmit={this.handleSubmit}>
            <input required name="name" pattern="^[a-zA-Z]{5,}" />
            <input required datatype="durationInDays" min="50" type="number" />
            <input required datatype="date" type="number" />
            <select>
              <option value="selecione">Selecione</option>
              <option value="Mercurio">Mercúrio</option>
              <option value="Venus">Vênus</option>
              <option value="Marte">Marte</option>
              <option value="Terra">Terra</option>
              <option value="Jupiter">Júpiter</option>
              <option value="Saturno">Saturno</option>
              <option value="Urano">Urano</option>
              <option value="Netuno">Netuno</option>
            </select>
            <input required name="description" pattern="^[a-zA-Z]{30,}" type="textarea" />
            <input required name="id" type="text" />
            <Button type="submit">Criar viagem!</Button>
          </form>
        );
    };
};

export default CreateTrip;

