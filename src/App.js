import React, { useState } from 'react';
import Providers from './Providers';
import { Navigation } from './components';

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
    </Providers>
  );
}

export default App;
