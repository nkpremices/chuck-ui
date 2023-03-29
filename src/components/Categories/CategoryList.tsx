import { useQuery } from '@apollo/client';
import { queries } from '../../shared/services';
import CategoryDetails from './CategoryDetails';
import { CategoryListSpinnerContainer, StyledCategoryList } from './styled';
import { get } from 'lodash';
import { BallTriangle } from 'react-loader-spinner';

const Spinner = () => (
  <BallTriangle
    height={100}
    width={100}
    radius={5}
    color="#2196f3"
    ariaLabel="ball-triangle-loading"
    wrapperClass=""
    wrapperStyle={{}}
    visible={true}
  />
);

const CategoryList = () => {
  const { data, loading, error } = useQuery(
    queries.GET_ALL_CATEGORIES.queryBody,
  );

  if (loading)
    return (
      <CategoryListSpinnerContainer>
        <Spinner />
      </CategoryListSpinnerContainer>
    );

  if (error) return <p>Error :(</p>;

  const categories = get(data, queries.GET_ALL_CATEGORIES.queryName, []);

  return (
    <StyledCategoryList>
      {categories.map((category: string) => (
        <CategoryDetails category={category} key={category} />
      ))}
    </StyledCategoryList>
  );
};

export default CategoryList;
