import React from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../components';
import { Layout, Typography } from '../styled_components';

function CategoryPage(props) {
  const { shoes, categories } = props;
  let { category } = useParams();

  const { name } = categories.find((cat) => cat.slug === category);

  const gridItems = shoes
    .filter((shoe) => shoe.category.slug === category)
    .map((shoe) => {
      const { id } = shoe;
      return (
        <Layout.GridItem key={id}>
          <Product shoe={shoe} />
        </Layout.GridItem>
      );
    });

  return (
    <Layout.Divider>
      <Typography.Heading1>{name}</Typography.Heading1>
      <Layout.Grid spacing={8} sm={50} md={33} lg={25}>
        {gridItems}
      </Layout.Grid>
    </Layout.Divider>
  );
}

export default CategoryPage;
