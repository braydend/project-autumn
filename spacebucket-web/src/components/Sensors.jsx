import React from "react";
import styled from "styled-components";

const SensorContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const SensorCard = styled.div`
    display: flex;
    flex-grow: 1;
    background: ${({ warning }) => (warning ? "#e63946" : "#80ff72")};
    margin: 1rem;
    padding: 1rem;
    border-radius: 4px;
`;

const Sensors = () => {
    const sensors = [
        { name: "sensor1", warning: true },
        { name: "sensor2", warning: false }
    ];

    return (
        <SensorContainer>
            {sensors.map(({ name, warning }) => (
                <SensorCard warning={warning}>{name}</SensorCard>
            ))}
        </SensorContainer>
    );
};

export default Sensors;
