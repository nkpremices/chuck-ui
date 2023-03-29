import gql from 'graphql-tag';

const queryName = 'randomJokeByCategory';

export const GET_RANDOM_JOKE_BY_CATEGORY = {
  queryName,
  queryBody: gql`
    query ${queryName}(
      $category: String!
    ) {
      ${queryName}(
        category: $category
      ) {
        id
        value
        iconUrl
        url
      }
    }
  `,
};
