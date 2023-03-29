import {
  HeroSection,
  HeroImage,
  HeroText,
  Title,
  Subtitle,
} from './HeroStyled';

const Hero = () => {
  return (
    <HeroSection>
      <HeroText>
        <Title>Chuck Norris Jokes</Title>
        <Subtitle>Click on a card to see a joke displayed</Subtitle>
      </HeroText>
    </HeroSection>
  );
};

export default Hero;
