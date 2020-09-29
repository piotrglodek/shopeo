import React from 'react';
import { Slider } from '../components';
import { Layout, Typography } from '../styled_components';

function Home(props) {
  const { shoes, categories } = props;

  const shoesSections = categories.map((category) => {
    const { name } = category;
    return (
      <Layout.Divider key={name}>
        <Typography.Heading1>{name}</Typography.Heading1>
        <Slider category={name} shoes={shoes} />
      </Layout.Divider>
    );
  });

  return shoesSections;
}

export default Home;
