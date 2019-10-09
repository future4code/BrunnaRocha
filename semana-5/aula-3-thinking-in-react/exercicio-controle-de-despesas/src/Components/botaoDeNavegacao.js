import React from 'react';
import styled from 'styled-components';

const BotaoDeNavegacao = styled.button `
    display: flex;
    flex-direction: column;
`

export function Botao (props){
    return (
        <BotaoDeNavegacao onClick={props.onclick}> 
            Botão
        </BotaoDeNavegacao>
    )
}