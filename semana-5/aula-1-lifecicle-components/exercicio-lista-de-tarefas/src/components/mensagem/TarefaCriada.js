import React from "react";
import styled from "styled-components";

const TarefaCriada = styled.p`
    padding-left: 10px;
    background: ${props => (props.hasClicked ? "lightblue" : "white")};
`;

export class tarefaCriada extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };

    render() {
        return (
            <MensagemEnviada
                hasClicked={this.state.hasClicked}>
                {this.props.tarefaCriada}
            </MensagemEnviada>
        );
    }
}
