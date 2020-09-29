import React from 'react';
import { ShopContextProvider } from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from './theme';

function Providers({ children }) {
  return (
    <ShopContextProvider>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </Router>
    </ShopContextProvider>
  );
}

export default Providers;
