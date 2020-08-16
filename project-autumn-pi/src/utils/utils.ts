import Sensor from "../types/Sensor";
import fetch, { Response } from 'node-fetch';
import EnvironmentVariable from "../consts/env";

const getEnvironmentVariable: (key: EnvironmentVariable) => string = (key) => {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Environment variable: ${key} does not exist`);
  }

  return value;
};

export const sendData: (sensor: Sensor) => Promise<Response> = async (sensor) => {
  const endpoint = getEnvironmentVariable(EnvironmentVariable.API_ENDPOINT);
  const apiKey = getEnvironmentVariable(EnvironmentVariable.API_KEY);

  const payload = {
    apiKey,
    sensor,
  };

  const response = await fetch(`${endpoint}/postSaveData`, { method: "post", body: JSON.stringify(payload) });

  if (!response.ok) {
    const data: Error = JSON.parse(await response.text());
    throw Error(data.message);
  }

  return response;
};
