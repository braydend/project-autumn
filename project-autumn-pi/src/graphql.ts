import { GraphQLServer } from 'graphql-yoga';
import { getAllTemperatureSensors } from './utils/ds18b20';
import { getAllMoistureSensors } from './utils/moistureSensor';

const APIServer: () => void = () => {
    const typeDefs = `
        type Query {
            sensors: [Sensor!]!
            temperatureSensors: [Sensor!]!
            moistureSensors: [Sensor!]!
        }

        type Sensor {
            type: String!
            name: String!
            id: String!
            reading: SensorData
        }

        type SensorData { 
            value: Float!
            timestamp: String! 
        }
    `;

    const resolvers = {
        Query: {
            sensors: () => [...getAllTemperatureSensors(), ...getAllMoistureSensors()],
            temperatureSensors: () => getAllTemperatureSensors(),
            moistureSensors: () => getAllMoistureSensors(),
        },
    };

    const server = new GraphQLServer({ typeDefs, resolvers });
    server.start(() => console.log('GraphQL API Server is running on port 4000'));
};

export default APIServer;
