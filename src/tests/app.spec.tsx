import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { queries } from '../shared/services';
import App from '../App';
import { mockCategories, mockRandomJoke } from './setup';

const mocks: any = [
  {
    request: {
      query: queries.GET_ALL_CATEGORIES.queryBody,
      variables: undefined,
    },
    result: {
      data: {
        [queries.GET_ALL_CATEGORIES.queryName]: mockCategories,
      },
    },
  },
  {
    request: {
      query: queries.GET_RANDOM_JOKE_BY_CATEGORY.queryBody,
      variables: {
        category: 'dev',
      },
    },
    result: {
      data: {
        [queries.GET_ALL_CATEGORIES.queryName]: mockRandomJoke,
      },
    },
  },
];

it('renders without error', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>,
  );
  expect(await screen.findByText('Chuck Norris Jokes')).toBeInTheDocument();
});
