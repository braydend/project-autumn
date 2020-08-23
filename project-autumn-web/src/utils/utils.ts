import EnvironmentVariable from "../consts/env";
import { SensorData } from "../typesAndHooks";

export const getEnvironmentVariable: (key: EnvironmentVariable) => string = (key) => {
  const value = process.env[`REACT_APP_${key}`];

  if (!value) {
    throw new Error(`Environment variable: ${key} does not exist`);
  }

  return value;
};

export const getDateStringForSensorData = (reading: SensorData, includeTime: boolean = true): string => {
  const date = new Date(parseInt(reading.timestamp));
  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString();

  return `${includeTime ? timeString : ''} ${dateString}`;
};