import React from 'react';

import GlobalStyles from '../../theme/globalStyle';

import { ApolloProvider } from './ApolloProvider';
import { ThemeProvider } from './ThemeProvider';
import ReduxProvider from './ReduxProvider';

interface AppProvidersProps {
  children: any;
}

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ApolloProvider>
    <ThemeProvider>
      <ReduxProvider>
        <>
          <GlobalStyles />
          {children}
        </>
      </ReduxProvider>
    </ThemeProvider>
  </ApolloProvider>
);
