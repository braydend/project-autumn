import { gql } from "@apollo/client";

export const GET_ALL_SENSORS = gql`
    query GetAllSensors {
        sensors{
            id
            name
            type
            reading{
                value
                timestamp
            }
        }
    }
`;