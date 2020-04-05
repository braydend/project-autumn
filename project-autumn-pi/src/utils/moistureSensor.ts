import { Gpio } from "onoff";
import { SensorData } from "../types/Sensor";

export const SOIL_MOISTURE_MIN = 0;
export const SOIL_MOISTURE_MAX = 0;

enum MoistureSensorStates {
    WET,
    DRY,
}

export const getSensorDataForMoistureSensor = (GPIO: number): SensorData => {
    const sensor = new Gpio(GPIO, 'in');
    const value: MoistureSensorStates.WET | MoistureSensorStates.DRY = sensor.readSync();
    return { value, timestamp: Date.now() };
};
