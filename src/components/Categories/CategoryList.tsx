import { useQuery } from '@apollo/client';
import { queries } from '../../shared/services';
import CategoryDetails from './CategoryDetails';
import { StyledCategoryList } from './styled';
import { get } from 'lodash';

const CategoryList = () => {
  const { data, loading, error } = useQuery(
    queries.GET_ALL_CATEGORIES.queryBody,
  );

  const categories = get(data, queries.GET_ALL_CATEGORIES.queryName, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <StyledCategoryList>
      {categories.map((category: string) => (
        <CategoryDetails category={category} key={category} />
      ))}
    </StyledCategoryList>
  );
};

export default CategoryList;
