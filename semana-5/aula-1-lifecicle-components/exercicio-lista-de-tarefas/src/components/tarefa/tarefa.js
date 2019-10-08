import React from "react";
import styled from "styled-components";

const li = styled.section`
    display: flex;
    justify-content: center;
    background-color: white;
`;


export function tarefa() {
        return (
            <li>
                {this.props.tarefa}
            </li>
        );
}
