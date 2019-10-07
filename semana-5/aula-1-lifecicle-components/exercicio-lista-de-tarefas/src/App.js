import React from "react";
import Tasks  from "./components/criartarefa/Tasks.js.js";
import styled from "styled-components";

const Container = styled.section`
    display: flex;
    justify-content: center;
    background-color: white;
`;

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
            
                <Cabeçalho>
                    <span>Em curso</span>
                    <button></button>
                </Cabeçalho> 
                <ul>
                {/* Aqui entrarão as tarefas que não foram concluídas ainda */}
                </ul>  
                
                <Cabeçalho>
                    <span>Concluídas</span>
                </Cabeçalho> 
                <ul>
                    {/* Aqui entrarão todas as tarefas concluídas */}
                </ul>
            </Container>
        );
    }
}

export default App;
