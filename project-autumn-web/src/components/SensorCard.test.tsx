import React from "react";
import { render } from "@testing-library/react";
import SensorCard from "./SensorCard";

test("SensorCard renders", () => {
    const sensor = { name: "Sensor 1", value: true };
    const { getByText } = render(<SensorCard sensor={sensor} />);
    const sensorOne = getByText(/Sensor 1/i);
    expect(sensorOne).toBeInTheDocument();
});
