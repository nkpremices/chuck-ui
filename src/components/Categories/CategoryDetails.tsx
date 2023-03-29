import React from 'react';
import { getCategoryImage } from '../../shared/helpers/categories';
import { StyledCategoryDetails, StyledCategoryTitle } from './styled';
import { useDispatch } from 'react-redux';
import { setSelectedCategory } from '../../store/actions/creators/categories';

const CategoryDetails: React.FC<CategoryDetailsProps> = ({ category }) => {
  const dispatch = useDispatch();

  return (
    <StyledCategoryDetails
      onClick={() => {
        dispatch(setSelectedCategory(category));
      }}
    >
      <img src={getCategoryImage(category)} alt="" />
      <StyledCategoryTitle>
        {`${category.charAt(0).toUpperCase()}${category.slice(1)}`}
      </StyledCategoryTitle>
    </StyledCategoryDetails>
  );
};

interface CategoryDetailsProps {
  category: string;
}

export default CategoryDetails;
