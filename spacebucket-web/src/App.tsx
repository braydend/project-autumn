import React from "react";
import styled from "styled-components";
import Sensors from "./components/Sensors";

const AppContainer = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

function App() {
    console.table('env vars:', process.env)
    return (
        <AppContainer>
            <header className="App-header">
                <h1>Spacebucket sensors</h1>
            </header>
            <Sensors />
        </AppContainer>
    );
}

export default App;
