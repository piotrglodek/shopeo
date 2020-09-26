import React from 'react';
import Providers from './Providers';
import { Switch, Route } from 'react-router-dom';
// components
import { Navigation } from './components';
// pages
import { Home } from './pages';

function App() {
  return (
    <Providers>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Providers>
  );
}

export default App;
