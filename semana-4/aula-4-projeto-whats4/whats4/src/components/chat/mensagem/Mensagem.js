import React from "react";
import styled from "styled-components";

const MensagemEnviada = styled.p`
    padding-left: 10px;
    background: ${props => (props.hasClicked ? "lightblue" : "white")};
`;
const NomeDoUsuario = styled.span`
    font-weight: bold;
`;
export class Mensagem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasClicked: false
        };
    }
    handleDoubleClick = () => {
        //this.props.seOCaraDeletar(this.props.keyProps);
        this.setState({
            hasClicked: !this.state.hasClicked
        });
    };

    render() {
        return (
            <MensagemEnviada
                onDoubleClick={this.handleDoubleClick}
                hasClicked={this.state.hasClicked}>
                <NomeDoUsuario>{this.props.autor}</NomeDoUsuario>:
                {this.props.mensagem}
            </MensagemEnviada>
        );
    }
}
