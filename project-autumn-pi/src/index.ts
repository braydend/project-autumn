import { config } from "dotenv";
import { CronJob } from "cron";
import { isEnvironmentValid } from "./utils/utils";
import { getFirestoreInstance } from "./utils/firestore";
import { getFirebaseConnection } from "./utils/firebase";
import { requiredEnv } from "./consts/env";
import Sensor, { SensorData } from "./types/Sensor";

// Creates environment variables from .env
config();

// Ensures environment is correctly configured before continuing
if (!isEnvironmentValid(process.env, requiredEnv))
  throw new Error("Check environment variables");

const firestore: firebase.firestore.Firestore = getFirestoreInstance(
  getFirebaseConnection()
);

// const eventLoop: () => void = async () => {
//   const sensorData: SensorData[] = [];
//   await firestore
//     .collection("sensors")
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         const { name, value } = doc.data();
//         const typedData: SensorData = { name, value };
//         sensorData.push(typedData);
//       });
//     });
//   console.table(sensorData);
// };

// const app: CronJob = new CronJob("* * * * * *", eventLoop);

// app.start();

const sensor = new Sensor("foo-sensor", "foobar", firestore);

sensor.storeData({ value: 1, timestamp: 12345 });
