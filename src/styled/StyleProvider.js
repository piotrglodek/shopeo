import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from './theme';

function StyleProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

export default StyleProvider;
