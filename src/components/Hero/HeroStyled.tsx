import styled from 'styled-components';

export const HeroSection = styled.div`
  background-image: url('https://www.tomshw.it/images/images/2023/02/crime-boss-rockay-city-269048.jpg');
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 64px;
`;

export const HeroImage = styled.img`
  width: 50%;
  height: auto;
  border-radius: 50%;
`;

export const HeroText = styled.div`
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
