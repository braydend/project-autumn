import React from "react";
import styled from "styled-components";
import { Sensor }  from "../typesAndHooks";
import SensorCard from "./SensorCard";

const SensorListContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

interface Props {
    sensors: Sensor[];
}

const SensorList = ({ sensors }: Props) => {
    return (
        <SensorListContainer>
            {sensors.map((sensor) => (
                <SensorCard
                    key={sensor.id}
                    sensor={sensor}
                    variant={sensor.type}
                />
            ))}
        </SensorListContainer>
    );
};

export default SensorList;
