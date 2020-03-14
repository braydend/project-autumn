import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sensors from "./components/SensorList";
import { getFirestoreInstance } from "./utils/firestore";
import { getFirebaseConnection } from "./utils/firebase";
import Sensor from "./types/sensor";
import { isEnvironmentValid } from "./utils/utils";

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

if (!isEnvironmentValid()) throw new Error("Check environment variables");

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
                    const { name, value } = doc.data();
                    sensorArray.push({ name, value });
                });
                setSensors(sensorArray);
            });
    }, []);

    return (
        <AppContainer>
            <header className="App-header">
                <h1>Spacebucket sensors</h1>
            </header>
            <Sensors sensors={sensors} />
        </AppContainer>
    );
}

export default App;
