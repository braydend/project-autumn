import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SensorList from "./components/SensorList";
import { getFirestoreInstance } from "./utils/firestore";
import { getFirebaseConnection } from "./utils/firebase";
import Sensor from "./types/Sensor";
import { isEnvironmentValid } from "./utils/utils";
import { requiredEnv } from "./consts/env";

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

if (!isEnvironmentValid(process.env, requiredEnv))
    throw new Error("Check environment variables");

const firestore = getFirestoreInstance(getFirebaseConnection());

function App() {
    const [sensors, setSensors] = useState<Sensor[]>([]);

    useEffect(() => {
        let sensorArray: Sensor[] = [];
        firestore
            .collection("sensors")
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const { name, type, min, max } = doc.data();
                    sensorArray.push(
                        new Sensor(doc.id, name, type, min, max, firestore)
                    );
                });
                setSensors(sensorArray);
            });
    }, []);

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
