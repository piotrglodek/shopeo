import React from 'react';
import Providers from './Providers';
import { Switch, Route } from 'react-router-dom';
// components
import { Navigation } from './components';
// pages
import { Home } from './pages';

function App() {
  /*
  // hooks
  import { useFetchProducts } from './hooks/useFetchProducts';
import { gql } from 'graphql-request';
  const url = process.env.REACT_APP_CMS_API_URL;
  const query = gql`
    {
      products {
        name
        price
        image {
          url
        }
        category {
          name
        }
      }
    }
  `;

  const [data, isLoading] = useFetchProducts(url, query);


  const [cartProducts, setProduct] = useState([]);
  const cartItemsCount = cartProducts.length;
  
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
    cartItemsCount: 0,
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
