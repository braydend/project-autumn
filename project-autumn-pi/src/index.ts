import { config } from "dotenv";
import { readAndPersistTemperatures } from "./utils/ds18b20";
import { readAndPersistMoistureSensor } from "./utils/moistureSensor";

// Doesnt have types or use ESM :(
// eslint-disable-next-line
const cron = require("node-cron");

// Creates environment variables from .env
config();

const main = () => {
  console.log("Running project-autumn...");
  readAndPersistTemperatures();
  readAndPersistMoistureSensor();
  console.log("Sleeping...");
};

// App entrypoint
// Run main() every hour
cron.schedule("0 * * * *", main);
