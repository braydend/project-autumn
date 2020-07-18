import Sensor, { SensorType } from "./Sensor";
import firebase from "firebase";
jest.mock('firebase');

const getFixture = (): Sensor => new Sensor(
    'sensor-12345', 
    'Sensor One', 
    SensorType.Temperature, 
    0, 
    30, 
    new firebase.app().connection(),
);

test("getId", () => {
    const expectedId = 12345;
    const sensor = getFixture();

    expect(sensor.getId()).toReturnWith(expectedId)
});