import React from "react";
import tarefa  from "./components/tarefa/tarefa.js";
import styled from "styled-components";

const Container = styled.section`
    display: flex;
    justify-content: center;
    background-color: white;
`;

const Cabecalho = styled.section`
    display: flex;
    justify-content: center;
`

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            listaDeTarefas: [],
        }
    }


    render() {
        return (
            <Container>
                <p>TAREFAS</p>
            
                <Cabecalho>
                    <span>Em curso</span>
                    <button></button>
                </Cabecalho> 
                <ul>
                {/* Aqui entrarão as tarefas que não foram concluídas ainda */}
                </ul>  

                <Cabecalho>
                    <span>Concluídas</span>
                </Cabecalho> 
                <ul>
                    {/* Aqui entrarão todas as tarefas concluídas */}
                </ul>
            </Container>
        );
    }
}

export default App;