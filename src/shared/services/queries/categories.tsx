import gql from 'graphql-tag';

const queryName = 'categories';

export const GET_ALL_CATEGORIES = {
  queryName,
  queryBody: gql`
    query ${queryName} {
      ${queryName}
    } 
  `,
};
