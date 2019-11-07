import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";



class CreateTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueName: "",
      valueDate: "",
      valueDescription: "",
      valueDuration: "",
      valueSelectPlanet: ""
  }
}

  onChangeValueName = (event) => {
    this.setState({valueName: event.target.value})
  }

  onChangeValueDate = (event) => {
    this.setState({valueDate: event.target.value})
  }

  onChangeValueDescription = (event) => {
    this.setState({valueDescription: event.target.value})
  }

  onChangeValueDuration = (event) => {
    this.setState({valueDuration: event.target.value})
  }

  onChangeValueSelect = (event) => {

    this.setState({valueSelectPlanet: event.target.value})

  } 

  handleSubmit = event => {
    event.preventDefault();
    alert("Viagem criada com sucesso!");
  };


    render() {
      return (
          <form onSubmit={this.handleSubmit}>
            <TextField
              id="outlined-textarea"
              label="Name"
              htmlFor="Name"
              value={this.state.valueName}
              onChange={this.onChangeValueName}
              placeholder="Type your name here"
              multiline
              margin="normal"
              variant="outlined"
              inputProps={{  pattern: "^[a-zA-Z\s\\.,]{5,}"  }}
              value={this.state.applicationText} 
              onChange={this.handleInputChange}
              required
              name="Name"
            />
            {/* <input required name="name" pattern="^[a-zA-Z]{5,}" /> */}

            <label htmlFor="date">Date:</label>
            <input 
              required type="date" 
              value={this.state.valueDate}
              onChange={this.onChangeValueDate}
              name="Date"
            />

            <label htmlFor="durationInDays">Trip Duration:</label>
            <input 
              required 
              datatype="durationInDays" 
              min="50" 
              type="number" 
              name="DurationInDays"
              value={this.state.valueDuration}
              onChange={this.onChangeValueDuration}
            />

            <label htmlFor="description">Description:</label>
            <TextField
              multiline
              rows="4"
              margin="normal"
              variant="filled"
              inputProps={{  pattern: "[a-zA-Z\s\\.,]", minlength:"30"  }}
              value={this.state.applicationText} 
              onChange={this.handleInputChange}  
              required
              name="Description"
              value={this.state.valueDescription}
              onChange={this.onChangeValueDescription}
            />

            <select
              name="Planet"
              id="Planet"
              value={this.state.valueSelectPlanet}
              onChange={this.onChangeValueSelect}
            >
              <option>Planeta</option>
              <option value="Mercurio">Mercúrio</option>
              <option value="Venus">Vênus</option>
              <option value="Marte">Marte</option>
              <option value="Terra">Terra</option>
              <option value="Jupiter">Júpiter</option>
              <option value="Saturno">Saturno</option>
              <option value="Urano">Urano</option>
              <option value="Netuno">Netuno</option>
            </select>
            <Button type="submit">Criar viagem!</Button>
          </form>
        );
    };
};

export default CreateTrip;

