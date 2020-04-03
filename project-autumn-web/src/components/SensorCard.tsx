import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sensor, { SensorData, SensorType } from "../types/Sensor";

interface Props {
    sensor: Sensor;
    variant: SensorType;
}

const Timestamp = styled.div`
    font-size: 0.5em;
`;

const Section = styled.div`
    padding: 1rem 0;
`;

const SensorCard = ({ sensor, variant }: Props) => {
    const [latestData, setLatestData] = useState<SensorData | undefined>();

    useEffect(() => {
        sensor.getLastestData().then(data => {
            if (data) setLatestData(data);
        });
    }, [sensor]);

    const getVariantUnits = (value: number) => {
        switch (variant) {
            case SensorType.Temperature:
                return <small>{value}&deg;C</small>;

            case SensorType.Moisture:
                return <small>{value ? "Moist" : "Dry"}</small>;

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
        @media (max-width: 650px) {
            flex-basis: 100%;
        }
        background: ${warning ? "#B01622" : "#0A6800"};
        margin: 1rem;
        padding: 1rem;
        border-radius: 4px;
    `;
    return (
        <Card>
            <Section>{getVariantUnits(latestData.value)}</Section>
            <Section>{sensor.getName()}</Section>
            <Section>
                <Timestamp>
                    {new Date(latestData.timestamp).toLocaleString()}
                </Timestamp>
            </Section>
        </Card>
    );
};

export default SensorCard;
