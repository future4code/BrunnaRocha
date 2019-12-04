import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router/" 
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";


const LoginWrapper = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <LoginWrapper>
        <Button onClick={this.props.goToFormTrips}>Inscrição</Button>
        <Button onClick={this.props.goToLogin}>Login</Button>
      </LoginWrapper>
    );
  }
}

function mapDispatchToProps (dispatch) {
    return {
        goToFormTrips: () => dispatch(push(routes.formTrips)),
        goToLogin: () => dispatch(push(routes.login)) 
    }
}

export default connect(
    null,
    mapDispatchToProps
  )(HomePage);

