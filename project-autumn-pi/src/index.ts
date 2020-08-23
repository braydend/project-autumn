import { config } from "dotenv";
import APIServer from "./graphql";

// Creates environment variables from .env
config();

// Start GraphQL API
APIServer();
