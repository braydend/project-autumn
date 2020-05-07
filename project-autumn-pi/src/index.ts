import { config } from "dotenv";
import { isEnvironmentValid } from "./utils/utils";
import { getFirestoreInstance } from "./utils/firestore";
import { getFirebaseConnection } from "./utils/firebase";
import { requiredEnv } from "./consts/env";
import Sensor, { DS18B20 } from "./types/Sensor";
import {
  transformDS18B20ArrayToSensorArray,
  getDataForSensor,
} from "./utils/ds18b20";

// Doesnt have types or use ESM :( lolcommit test
// eslint-disable-next-line
const ds18b20Raspi = require("ds18b20-raspi");
const cron = require("node-cron");

// Creates environment variables from .env
config();

// Ensures environment is correctly configured before continuing
if (!isEnvironmentValid(process.env, requiredEnv))
  throw new Error("Check environment variables");

const firestore: firebase.firestore.Firestore = getFirestoreInstance(
  getFirebaseConnection()
);

const readAndPersistTemperatures = (): void => {
  const allDS18B20Sensors: DS18B20[] = ds18b20Raspi.readAllC();

  const ds18b20Sensors: Sensor[] = transformDS18B20ArrayToSensorArray(
    allDS18B20Sensors,
    firestore
  );

  ds18b20Sensors.forEach((sensor: Sensor) => {
    console.log(`Persisting data for ${sensor.getId()}`);
    sensor.storeData(getDataForSensor(sensor, allDS18B20Sensors));
  });
};

const main = (): void => {
  console.log("Running project-autumn...");
  readAndPersistTemperatures();
  console.log("Sleeping...");
};

// App entrypoint
// Run main() every hour
cron.schedule("0 * * * *", main);
