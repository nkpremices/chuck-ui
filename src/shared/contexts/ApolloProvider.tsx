import React from 'react';
import { ApolloProvider as Provider } from '@apollo/client';
import { client } from '../../apolloClient/client';

interface IApolloProvider {
  children: any;
}

export const ApolloProvider = ({ children, ...rest }: IApolloProvider) => (
  <Provider client={client} {...rest}>
    {children}
  </Provider>
);
