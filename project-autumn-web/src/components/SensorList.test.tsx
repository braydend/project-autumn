import React from "react";
import { render } from "@testing-library/react";
import SensorList from "./SensorList";

test("SensorList renders correctly", () => {
    const sensors = [
        { name: "Sensor 1", value: true },
        { name: "Sensor 2", value: false }
    ];
    const { getByText } = render(<SensorList sensors={sensors} />);
    const sensorOne = getByText(/Sensor 1/i);
    const sensorTwo = getByText(/Sensor 2/i);
    expect(sensorOne).toBeInTheDocument();
    expect(sensorTwo).toBeInTheDocument();
});
