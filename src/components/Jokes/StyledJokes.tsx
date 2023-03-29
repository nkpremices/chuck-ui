import styled from 'styled-components';

export const JokeDetailsContainerStyled = styled.div<{ bgUrl: string }>`
  background-color: #fff;
  padding: 16px;
  background-image: ${({ bgUrl }) => `url(${bgUrl})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 250px;
  margin-top: 24px;
  border-radius: 8px;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const JokeDetailsTitleStyled = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 0 8px;
`;

export const JokeDetailsDescriptionStyled = styled.p`
  font-size: 1.2rem;
  margin: 0;
  background: rgba(29, 29, 29, 0.9);
  border-left: 4px solid #d4a259;
  padding: 1rem;
`;

export const JokeDetailsModalButtonContainerStyled = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    background-color: rgb(19 47 85);
    border: none;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    height: 32px;
    width: 32px;
    color: white;
  }
`;

export const JokeDetailsSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 350px;
`;
