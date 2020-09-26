import React from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
// components
import { Grid, GridItem } from '../../styled/shared';
import { Product } from '../../components';

function CategoryPage(props) {
  const { shoes } = props;
  let { url } = useRouteMatch();
  let { category } = useParams();

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
    <Grid wrap='wrap' sm={50} md={33} lg={25}>
      {renderShoes}
    </Grid>
  );
}

export default CategoryPage;
