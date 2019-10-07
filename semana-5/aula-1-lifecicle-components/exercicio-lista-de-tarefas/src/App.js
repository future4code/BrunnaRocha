import React from "react";
import Tasks  from "./components/tasks/Tasks.js";
import styled from "styled-components";

const Container = styled.section`
    display: flex;
    justify-content: center;
    background-color: white;
`;

function App() {
    return (
        <Container>
            <Tasks />
        </Container>
    );
}

export default App;
