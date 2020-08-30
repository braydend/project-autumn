import React from "react";
import styled from "styled-components";
import { Sensor, SensorType, SensorData } from "../typesAndHooks";
import { MoistureSensorState } from "../enums";
import { getDateStringForSensorData } from "../utils/utils";

type Props = {
    sensor: Sensor;
    variant: SensorType;
    min?: number;
    max?: number;
}

const Timestamp = styled.div`
    font-size: 0.5em;
`;

const SensorCard: React.FC<Props> = ({ sensor: { reading, name }, variant, min = 0, max = 100 }) => {
    const addVariantUnitsToValue = (value: number) => {
        switch (variant) {
            case SensorType.Temperature:
                return <small>{value}&deg;C</small>;

            case SensorType.Moisture:
                return <small>{value === MoistureSensorState.WET ? "Moist" : "Dry"}</small>;

            default:
                return <small>{value} units</small>;
        }
    };

    const isTemperature = variant === SensorType.Temperature;
    const isReadingSet = reading !== null && reading !== undefined;
    const isReadingWithinBounds = isReadingSet 
        // TS can't infer what reading is typed, so need to override the compiler.
        && min < (reading as SensorData).value 
        && (reading as SensorData).value < max;

    const warning = isTemperature ? !isReadingWithinBounds : reading?.value === MoistureSensorState.DRY ;

    const Card = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        flex-basis: 40%;
        justify-content: space-between;
        @media (max-width: 650px) {
            flex-basis: 100%;
        }
        background: ${warning ? "#B01622" : "#0A6800"};
        margin: 1rem;
        padding: 1.5rem 1rem;
        border-radius: 4px;
    `;

    return (
        <Card>
            <strong>{reading ? addVariantUnitsToValue(reading.value) : "?"}</strong>
            <h2>{name}</h2>
            <Timestamp>
                {reading ? getDateStringForSensorData(reading) : "?"}
            </Timestamp>
        </Card>
    );
};

export default SensorCard;
