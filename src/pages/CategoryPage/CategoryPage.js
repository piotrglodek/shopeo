import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
// components
import { Grid, GridItem } from '../../styled/shared';
import { Product, ProductSection } from '../../components';

function CategoryPage(props) {
  const { shoes, categories } = props;
  let { url } = useRouteMatch();
  let { category } = useParams();

  const { name } = categories.find((cat) => cat.slug === category);

  const renderShoes = shoes
    .filter((shoe) => shoe.category.slug === category)
    .map((shoe) => {
      const { id } = shoe;
      return (
        <GridItem key={id}>
          <Product shoe={shoe} />
        </GridItem>
      );
    });

  return (
    <ProductSection title={name}>
      <Grid wrap='wrap' sm={50} md={33} lg={25}>
        {renderShoes}
      </Grid>
    </ProductSection>
  );
}

export default CategoryPage;
