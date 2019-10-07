import React from "react";
import tarefa  from "./components/tarefa/tarefa.js";
import styled from "styled-components";

const Container = styled.section`
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: orange;
    height: 100vh;
`;

const div = styled.div`
    display: flex;
    justify-content: center;
    height: 20px;
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
                <div className="titulo">
                    <span>TAREFAS</span>
                </div>
                
                <div className="tarefaEmCurso">
                    <span>Em curso</span>
                    <button></button>
                </div> 
                <ul>
                {/* Aqui entrarão as tarefas que não foram concluídas ainda */}
                </ul>  

                <div className="tarefaConcluida">
                    <span>Concluídas</span>
                </div> 
                <ul>
                    {/* Aqui entrarão todas as tarefas concluídas */}
                </ul>
            </Container>
        );
    }
}

export default App;
