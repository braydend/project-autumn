import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sensor, { SensorData, SensorType, MoistureSensorStates } from "../types/Sensor";

interface Props {
    sensor: Sensor;
    variant: SensorType;
}

const Timestamp = styled.div`
    font-size: 0.5em;
`;

const SensorCard = ({ sensor, variant }: Props) => {
    const [latestData, setLatestData] = useState<SensorData | undefined>();

    useEffect(() => {
        sensor.getLastestData().then(data => {
            if (data) setLatestData(data);
        });
    }, [sensor]);

    const addVariantUnitsToValue = (value: number) => {
        switch (variant) {
            case SensorType.Temperature:
                return <small>{value}&deg;C</small>;

            case SensorType.Moisture:
                return <small>{value === MoistureSensorStates.WET ? "Moist" : "Dry"}</small>;

            default:
                return <small>{value} units</small>;
        }
    };

    if (!latestData) return <p>Loading</p>;

    const warning =
        sensor.getMin() > latestData.value ||
        latestData.value > sensor.getMax();

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
            <strong>{addVariantUnitsToValue(latestData.value)}</strong>
            <h2>{sensor.getName()}</h2>
            <Timestamp>
                {new Date(latestData.timestamp).toLocaleString()}
            </Timestamp>
        </Card>
    );
};

export default SensorCard;
