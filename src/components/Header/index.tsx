import { StyledHeader, StyledLogoContainer } from './HeaderStyled';
import logo from '../../assets/chucknorris_logo_coloured_small_2x-removebg-preview.png';

const Header = () => {
  return (
    <StyledHeader className="header">
      <StyledLogoContainer className="logo-container">
        <img className="logo" src={logo} alt="ChuckNorrisJokes" />
      </StyledLogoContainer>
    </StyledHeader>
  );
};
export default Header;
