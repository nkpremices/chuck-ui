import React from 'react';
import { ThemeProvider as Provider } from 'styled-components';

import { theme } from '../../theme';

interface IThemeProvider {
  children: any;
}

export const ThemeProvider = ({ children, ...rest }: IThemeProvider) => (
  <Provider theme={theme} {...rest}>
    {children}
  </Provider>
);
