import React from 'react';
import { getCategoryImage } from '../../shared/helpers/categories';
import { StyledCategoryDetails, StyledCategoryTitle } from './styled';

const CategoryDetails: React.FC<CategoryDetailsProps> = ({ category }) => {
  return (
    <StyledCategoryDetails>
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
