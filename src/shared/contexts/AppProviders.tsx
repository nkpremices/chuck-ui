import React from 'react';

import GlobalStyles from '../../theme/globalStyle';

import { ApolloProvider } from './ApolloProvider';
import { ThemeProvider } from './ThemeProvider';

interface AppProvidersProps {
  children: any;
}

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ApolloProvider>
    <ThemeProvider>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  </ApolloProvider>
);
