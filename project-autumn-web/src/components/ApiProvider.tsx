import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import EnvironmentVariable from '../consts/env';
import { getEnvironmentVariable } from '../utils/utils';
import React from 'react';

const client = new ApolloClient({
  uri: getEnvironmentVariable(EnvironmentVariable.API_ENDPOINT),
  cache: new InMemoryCache(),
});

const ApiProvider: React.FC  = ({ children }) => <ApolloProvider client={client} >{children}</ApolloProvider>;

export default ApiProvider;