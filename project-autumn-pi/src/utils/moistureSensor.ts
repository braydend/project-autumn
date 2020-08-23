import { Gpio } from "onoff";
import Sensor, { SensorData, SensorType } from "../types/Sensor";
import { sendData } from "./utils";

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

export const readAndPersistMoistureSensor: () => void = async () => {
    // The data pin connected to soil moiture sensor
    const GPIO = 26;
    const moistureSensor: Sensor = {
      id: 'moisture-sensor-1',
      name: 'Soil Moisture',
      type: SensorType.Moisture,
      reading: getSensorDataForMoistureSensor(GPIO),
    };
  
    // Send request to endpoint with id, type and reading
    await sendData(moistureSensor);
  };
