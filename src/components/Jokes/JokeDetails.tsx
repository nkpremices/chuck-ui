import { useQuery } from '@apollo/client';
import { get } from 'lodash';
import { queries } from '../../shared/services';
import React from 'react';
import {
  JokeDetailsContainerStyled,
  JokeDetailsDescriptionStyled,
  JokeDetailsSpinnerContainer,
  JokeDetailsTitleStyled,
} from './StyledJokes';
import { Joke } from '../../@types/joke';
import { getCategoryImage } from '../../shared/helpers/categories';
import { MagnifyingGlass } from 'react-loader-spinner';

const Loader = () => (
  <MagnifyingGlass
    visible={true}
    height="80"
    width="80"
    ariaLabel="MagnifyingGlass-loading"
    wrapperStyle={{}}
    wrapperClass="MagnifyingGlass-wrapper"
    glassColor="#c0efff"
    color="#e15b64"
  />
);

export const JokeDetails: React.FC<JokeDetailsProps> = ({ category }) => {
  const {
    data: jokeDetailsData,
    loading,
    error,
  } = useQuery(queries.GET_RANDOM_JOKE_BY_CATEGORY.queryBody, {
    variables: {
      category,
    },
  });

  if (loading)
    return (
      <JokeDetailsSpinnerContainer>
        <Loader />
      </JokeDetailsSpinnerContainer>
    );
  if (error) return <div>Error (;</div>;

  const jokeDetails = get<Joke | null>(
    jokeDetailsData,
    queries.GET_RANDOM_JOKE_BY_CATEGORY.queryName,
    null,
  );

  return (
    <JokeDetailsContainerStyled bgUrl={getCategoryImage(category)}>
      <JokeDetailsDescriptionStyled>
        {jokeDetails?.value}
      </JokeDetailsDescriptionStyled>
    </JokeDetailsContainerStyled>
  );
};

interface JokeDetailsProps {
  category: string;
}
