import React, { useContext } from 'react';
import { Container } from '../../styled/shared';
import { ShopContext } from '../../store';
import { ProductSection } from '../../components';

function Home() {
  const [state] = useContext(ShopContext);
  const { categories, shoes, loading } = state;

  if (loading) {
    return <Container>Loading...</Container>;
  } else {
    const productsSections = categories.map((category) => {
      const { name } = category;
      return <ProductSection key={name} title={name} shoes={shoes} />;
    });
    return <Container>{productsSections}</Container>;
  }
}

export default Home;
