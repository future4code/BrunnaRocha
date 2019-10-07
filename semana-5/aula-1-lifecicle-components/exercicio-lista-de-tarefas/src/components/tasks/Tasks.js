import React from "react";
import styled from "styled-components";

const Template = styled.section`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 500px;
    min-height: 100vh;
    justify-content: flex-end;
    box-sizing: border-box;
    padding-bottom: 21px;
`;
const Form = styled.div`
    position: fixed;
    box-sizing: border-box;
    bottom: 0;
    display: flex;
    width: 500px;
`;
const InputTask = styled.input`
    flex: 1;
`;

export class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valorInputMensagem: "",
            mensagens: []
        };
    }

    
    render() {
            return (
                
        return (
          
        );
    }
}

export default Tasks;
