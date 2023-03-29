import gql from 'graphql-tag';

const queryName = 'randomJoke';

export const GET_RANDOM_JOKE = {
  queryName,
  queryBody: gql`
    query ${queryName} {
      ${queryName} {
        id
        value
        iconUrl
        url
      }
    }
  `,
};
