import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
// components
import { Navigation } from './components';
import { Layout, Typography } from './styled_components';
// pages
import { Home, CategoryPage, CartPage, ShoePage } from './pages';
// context
import { ShopContext } from './store';

function App() {
  const [state] = useContext(ShopContext);
  const { loading } = state;

  if (loading) {
    return <Typography.Paragraph>loading...</Typography.Paragraph>;
  } else {
    return (
      <>
        <Navigation {...state} />
        <Layout.Container>
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
        </Layout.Container>
      </>
    );
  }
}

export default App;
