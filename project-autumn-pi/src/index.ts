import { config } from "dotenv";
import Sensor, { DS18B20, SensorType } from "./types/Sensor";
import {
  transformDS18B20ArrayToSensorArray,
} from "./utils/ds18b20";
import { sendData } from "./utils/utils";

// Doesnt have types or use ESM :(
// eslint-disable-next-line
const ds18b20Raspi = require("ds18b20-raspi");
// eslint-disable-next-line
const cron = require("node-cron");

// Creates environment variables from .env
config();

const readAndPersistTemperatures = (): void => {
  const allDS18B20Sensors: DS18B20[] = ds18b20Raspi.readAllC();

  const ds18b20Sensors: Sensor[] = transformDS18B20ArrayToSensorArray(
    allDS18B20Sensors,
  );

  ds18b20Sensors.forEach((sensor: Sensor) => {
    // Send request to endpoint with id, type and reading

    // sensor.storeData(getDataForSensor(sensor, allDS18B20Sensors));
  });
};

const readAndPersistMoistureSensor: () => void = async () => {
  // The data pin connected to soil moiture sensor
  const GPIO = 26;
  const moistureSensor: Sensor = {
    id: 'moisture-sensor-1',
    name: 'Soil Moisture',
    type: SensorType.Moisture,

  };
  // const moistureReading = getSensorDataForMoistureSensor(GPIO);

  // Send request to endpoint with id, type and reading
  const resp = await sendData(moistureSensor);
};

const main = async () => {
  console.log("Running project-autumn...");
  // await readAndPersistTemperatures();
  await readAndPersistMoistureSensor();
  console.log("Sleeping...");
};

// App entrypoint
// Run main() every hour
cron.schedule("0 * * * *", main);
