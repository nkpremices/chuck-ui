import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import theme from './theme';

export default createGlobalStyle`
  ${normalize};

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: ${theme.font.size.regular};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.black};
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
  }

  .prevent-scrolling {
    overflow: hidden;
  }

  ::-webkit-scrollbar {
      width: 8px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: #001529;
  }

  ::placeholder {
    color: ${theme.colors.black};
  }

  .react-mde .grip {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
  }
`;
