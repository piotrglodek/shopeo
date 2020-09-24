import React, { useState } from 'react';
import Providers from './Providers';
import { Switch, Route } from 'react-router-dom';
// components
import { Navigation } from './components';
// pages
import { Home } from './pages';

function App() {
  const [cartProducts, setProduct] = useState([]);
  const cartItemsCount = cartProducts.length;
  /*
  const addProductToCart = (product) => {
    setProduct((prevArray) => [...prevArray, product]);
  };
  const removeProductFromCart = (productToDelete) => {
    console.log(cartProducts);
    const newProducts = cartProducts.filter(
      (product) => product.productName !== productToDelete.productName
    );
    setProduct(newProducts);
  };
  */
  const cartProps = {
    cartItemsCount: cartItemsCount,
  };
  return (
    <Providers>
      <Navigation cartProps={cartProps} />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </Providers>
  );
}

export default App;
