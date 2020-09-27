import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  ProductImage,
  ProductName,
  ProductCost,
  ProductAddToCartBtn,
} from '../../components/Product/product.components';
import { Grid, GridItem } from '../../styled/shared';
import { GoBackButton, GoBackArrow } from './shoePage.components';

export default function ShoePage(props) {
  const { shoes } = props;
  let history = useHistory();
  let { id } = useParams();
  const goToPrevLocation = () => history.goBack();
  const {
    name,
    price,
    image: { url },
  } = shoes.find((shoe) => shoe.id === id);

  return (
    <>
      <GoBackButton onClick={goToPrevLocation}>
        <GoBackArrow />
      </GoBackButton>
      <Grid sm={50} wrap='wrap' spacing={4}>
        <GridItem>
          <ProductImage src={url} />
        </GridItem>
        <GridItem>
          <ProductName>{name}</ProductName>
          <ProductCost>{price} $</ProductCost>
          <ProductAddToCartBtn>Add to cart</ProductAddToCartBtn>
        </GridItem>
      </Grid>
    </>
  );
}
