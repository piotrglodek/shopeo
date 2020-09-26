import React, { useContext } from 'react';

import { Switch, Route } from 'react-router-dom';
// components
import { Navigation } from './components';
// pages
import { Home } from './pages';
// context
import { ShopContext } from './store';

function App() {
  const [state] = useContext(ShopContext);
  const { loading } = state;
  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </>
  );
}

export default App;
