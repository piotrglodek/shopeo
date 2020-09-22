import React from 'react';
import StyleProvider from './styled/StyleProvider';
import RouteProvider from './RouteProvider';

function Providers({ children }) {
  return (
    <StyleProvider>
      <RouteProvider>{children}</RouteProvider>
    </StyleProvider>
  );
}

export default Providers;
