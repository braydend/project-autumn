import React from "react";
import styled from "styled-components";
import SensorList from "./components/SensorList";
import { useGetAllSensorsQuery } from "./typesAndHooks";

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
    const { data, loading, error } = useGetAllSensorsQuery();

    if (loading) return <div>Loading...</div>;
    if (error || !data) return <div>Something went wrong!</div>;

    const { sensors } = data;

    return (
        <AppContainer>
            <header className="App-header">
                <h1>Project Autumn</h1>
            </header>
            <SensorList sensors={sensors} />
        </AppContainer>
    );
}

export default App;
