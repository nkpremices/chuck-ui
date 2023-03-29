import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #2196f3;
  color: #fff;
  height: 64px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 16px;
  }

  .logo {
    margin: 0;
    height: 32px;
    width: auto;
  }
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;

  .logo {
    margin: 0;
    height: 32px;
    width: auto;
  }
`;
