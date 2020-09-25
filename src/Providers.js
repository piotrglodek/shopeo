import React from 'react';
import StyleProvider from './styled/StyleProvider';
import RouteProvider from './RouteProvider';
import { ShopContextProvider } from './store';

function Providers({ children }) {
  return (
    <ShopContextProvider>
      <StyleProvider>
        <RouteProvider>{children}</RouteProvider>
      </StyleProvider>
    </ShopContextProvider>
  );
}

export default Providers;
