import React from 'react';
import { ProductSection } from '../../components';

function Home(props) {
  const { shoes, categories } = props;

  const productsSections = categories.map((category) => {
    const { name } = category;
    return <ProductSection key={name} title={name} shoes={shoes} />;
  });
  return <>{productsSections}</>;
}

export default Home;
