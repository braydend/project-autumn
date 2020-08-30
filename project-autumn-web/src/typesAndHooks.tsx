import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  sensors: Array<Sensor>;
  temperatureSensors: Array<Sensor>;
  moistureSensors: Array<Sensor>;
};

export type Sensor = {
  __typename?: 'Sensor';
  type: SensorType;
  name: Scalars['String'];
  id: Scalars['String'];
  reading?: Maybe<SensorData>;
};

export type SensorData = {
  __typename?: 'SensorData';
  value: Scalars['Float'];
  timestamp: Scalars['String'];
};

export enum SensorType {
  Moisture = 'MOISTURE',
  Temperature = 'TEMPERATURE'
}

export type GetAllSensorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSensorsQuery = (
  { __typename?: 'Query' }
  & { sensors: Array<(
    { __typename?: 'Sensor' }
    & Pick<Sensor, 'id' | 'name' | 'type'>
    & { reading?: Maybe<(
      { __typename?: 'SensorData' }
      & Pick<SensorData, 'value' | 'timestamp'>
    )> }
  )> }
);


export const GetAllSensorsDocument = gql`
    query GetAllSensors {
  sensors {
    id
    name
    type
    reading {
      value
      timestamp
    }
  }
}
    `;

/**
 * __useGetAllSensorsQuery__
 *
 * To run a query within a React component, call `useGetAllSensorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSensorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSensorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllSensorsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSensorsQuery, GetAllSensorsQueryVariables>) {
        return Apollo.useQuery<GetAllSensorsQuery, GetAllSensorsQueryVariables>(GetAllSensorsDocument, baseOptions);
      }
export function useGetAllSensorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSensorsQuery, GetAllSensorsQueryVariables>) {
          return Apollo.useLazyQuery<GetAllSensorsQuery, GetAllSensorsQueryVariables>(GetAllSensorsDocument, baseOptions);
        }
export type GetAllSensorsQueryHookResult = ReturnType<typeof useGetAllSensorsQuery>;
export type GetAllSensorsLazyQueryHookResult = ReturnType<typeof useGetAllSensorsLazyQuery>;
export type GetAllSensorsQueryResult = Apollo.QueryResult<GetAllSensorsQuery, GetAllSensorsQueryVariables>;