import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
// components
import { Navigation } from './components';
import { Container } from './styled/shared';
// pages
import { Home, CategoryPage, CartPage, ShoePage } from './pages';
// context
import { ShopContext } from './store';

function App() {
  const [state] = useContext(ShopContext);
  const { loading } = state;

  if (loading) {
    return <p>loading...</p>;
  } else {
    return (
      <>
        <Navigation {...state} />
        <Container>
          <Switch>
            <Route exact path='/' component={() => <Home {...state} />} />
            <Route
              exact
              path='/category/:category'
              component={() => <CategoryPage {...state} />}
            />
            <Route exact path='/cart' component={CartPage} />
            <Route exact path='/shoe/:id' component={ShoePage} />
          </Switch>
        </Container>
      </>
    );
  }
}

export default App;
