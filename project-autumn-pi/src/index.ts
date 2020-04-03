import { config } from "dotenv";
import { CronJob } from "cron";
import { isEnvironmentValid } from "./utils/utils";
import { getFirestoreInstance } from "./utils/firestore";
import { getFirebaseConnection } from "./utils/firebase";
import { requiredEnv } from "./consts/env";
import Sensor, { DS18B20 } from "./types/Sensor";
import {
    transformDS18B20ArrayToSensorArray,
    getDataForSensor,
} from "./utils/ds18b20";

// Doesnt have types or use ESM :(
// eslint-disable-next-line
const ds18b20Raspi = require("ds18b20-raspi");

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

    const ds18b20Sensors = transformDS18B20ArrayToSensorArray(
        allDS18B20Sensors,
        firestore
    );

    ds18b20Sensors.forEach((sensor: Sensor) => {
        sensor.storeData(getDataForSensor(sensor, allDS18B20Sensors));
    });
};

const eventLoop = (): void => {
    readAndPersistTemperatures();
};

// Runs the event loop every 30 minutes
const app: CronJob = new CronJob("*/30 * * * * *", eventLoop);

app.start();
