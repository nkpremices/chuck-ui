import { useQuery } from '@apollo/client';
import { queries } from '../../shared/services';
import { get } from 'lodash';
import { GET_ALL_CATEGORIES } from '../../shared/services/queries';
import CategoryList from '../Categories/CategoryList';
import Header from '../Header';
import Hero from '../Hero';
import JokeDetailsModal from '../Jokes/JokeDetailsModal';

const Home = () => {
  const { data: categories, loading: categoriesLoading } = useQuery(
    queries.GET_ALL_CATEGORIES.queryBody,
  );

  const categoriesData = get(categories, GET_ALL_CATEGORIES.queryName, []);

  return (
    <div>
      <Header />
      <Hero />
      <CategoryList />
      <JokeDetailsModal />
    </div>
  );
};

export default Home;
