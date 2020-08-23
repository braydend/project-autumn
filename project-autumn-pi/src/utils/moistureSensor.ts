import { Gpio } from "onoff";
import Sensor, { SensorData, SensorType } from "../types/Sensor";

export const SOIL_MOISTURE_MIN = 0;
export const SOIL_MOISTURE_MAX = 0;

const MOISTURE_SENSOR_GPIO_PINS = [26];

enum MoistureSensorStates {
    WET,
    DRY,
}

export const getSensorDataForMoistureSensor = (GPIO: number): SensorData => {
    const sensor = new Gpio(GPIO, 'in');
    const value: MoistureSensorStates.WET | MoistureSensorStates.DRY = sensor.readSync();
    return { value, timestamp: Date.now().toString() };
};

export const getAllMoistureSensors: () => Sensor[] = () => MOISTURE_SENSOR_GPIO_PINS.map((gpio, index) => ({
  id: `moisture-sensor-${index}`,
  name: 'Soil Moisture',
  type: SensorType.Moisture,
  reading: getSensorDataForMoistureSensor(gpio),
}));
