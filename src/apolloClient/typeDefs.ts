import gql from 'graphql-tag';

export default gql`
  type Joke {
    id: ID!
    value: String!
    iconUrl: String
    url: String!
  }

  type Query {
    categories: [String!]!
    randomJokeByCategory(category: String!): Joke!
    randomJoke: Joke!
  }
`;
