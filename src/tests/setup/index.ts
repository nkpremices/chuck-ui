import { Joke } from '../../@types/joke';
import { faker } from '@faker-js/faker';

export const mockRandomJoke: Joke = {
  id: faker.random.numeric(10).toString(),
  url: faker.internet.url(),
  value: faker.random.words(20),
  iconUrl: faker.internet.url(),
};

export const mockCategories = faker.random.words(10).split(' ');
