import React, { Component } from "react";
import Button from "@material-ui/core/Button";



class CreateTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  function App() {
  const handleSubmit = event => {
    event.preventDefault();
    alert("Viagem criada com sucesso!");
  };


    render() {
        const { email, password } = this.state;

        return (
        <LoginWrapper>
            <form onSubmit={handleSubmit}>
                <input required name="name" pattern="^[a-zA-Z]{5,}" />
                <input required datatype="durationInDays" min="50" type="number" />
                <input required datatype="date" type="number" />
                <select>
                    <option value="Mercurio"></option>
                    <option value="Venus"></option>
                    <option value="Marte"></option>
                    <option value="Terra"></option>
                    <option value="Jupiter"></option>
                    <option value="Saturno"></option>
                    <option value="Urano"></option>
                    <option value="Netuno"></option>
                </select>
                <input required name="description" min="30" type="textarea" />
                <input required name="id" type="text" />
                <Button type="submit">Criar viagem!</Button>
            </form>
        </LoginWrapper>
        );
    };
    };
};

export default CreateTrip;

