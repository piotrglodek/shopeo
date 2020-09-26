import React from 'react';
import { ProductSection, Slider } from '../../components';

function Home(props) {
  const { shoes, categories } = props;

  const productsSections = categories.map((category) => {
    const { name } = category;
    return (
      <ProductSection key={name} title={name}>
        <Slider title={name} shoes={shoes} />
      </ProductSection>
    );
  });
  return <>{productsSections}</>;
}

export default Home;
