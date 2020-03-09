import React from "react";
import { render } from "@testing-library/react";
import Sensors from "./Sensors";

test("renders sensors", () => {
    const { getByText } = render(<Sensors />);
    const sensorOne = getByText(/sensor1/i);
    const sensorTwo = getByText(/sensor2/i);
    expect(sensorOne).toBeInTheDocument();
    expect(sensorTwo).toBeInTheDocument();
});
