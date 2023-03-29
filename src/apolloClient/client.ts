import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import fetch from 'cross-fetch';

/**
 * Apollo client configuration inspired from the following refs:
 * @link https://www.apollographql.com/docs/react/api/link/introduction/
 * @link https://www.apollographql.com/docs/react/api/link/apollo-link-error/
 *
 * @type {ApolloClient<any>}
 */
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (networkError) {
        console.log(
          `\n--> [Network error]:\n\n`,
          JSON.stringify(networkError, null, 2),
          '\n\n',
        );
      }

      if (graphQLErrors) {
        graphQLErrors.forEach(({ message, locations, path }) => {
          console.log(
            `\n--> [GraphQL error]:\n`,
            `\n[Message]: ${message}\n`,
            `\n[path]: ${path}\n`,
            '\n[Locations]: \n',
            JSON.stringify(locations, null, 2),
            '\n',
          );
        });
      }
    }),
    new HttpLink({ uri: `${process.env.VITE_GRAPHQL_URL}/graphql`, fetch }),
  ]),
});
