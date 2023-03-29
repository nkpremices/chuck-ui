import styled from 'styled-components';

export const StyledCategoryDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    cursor: pointer;

    img {
      filter: blur(2px);
      scale(0.95);
      transition: all 0.3s ease-in-out;
    }

    h3 {
      transform: translateY(-10px) scale(1.1);
      transition: all 0.3s ease-in-out;
    }
  }

  img {
    width: 100%;
    height: 185px;
    margin-bottom: 20px;
    border-radius: 8px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const StyledCategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  margin: 0 auto;
  max-width: 1200px;
  padding: 20px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const StyledCategoryTitle = styled.h3`
  font-size: 14px;
  margin-bottom: 10px;
`;
