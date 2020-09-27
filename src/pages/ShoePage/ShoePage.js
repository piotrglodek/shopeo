import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  ProductImage,
  ProductName,
  ProductCost,
  ProductAddToCartBtn,
} from '../../components/Product/product.components';
import { Grid, GridItem } from '../../styled/shared';
import { GoBackButton, GoBackArrow } from './shoePage.components';
import { ShopContext } from '../../store';

export default function ShoePage(props) {
  const { shoes } = props;
  let history = useHistory();
  let { id } = useParams();
  const goToPrevLocation = () => history.goBack();
  const shoe = shoes.find((shoe) => shoe.id === id);
  const {
    name,
    price,
    image: { url },
  } = shoe;

  const [state, dispatch] = useContext(ShopContext);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: shoe });
  };
  console.log(state);

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
          <ProductAddToCartBtn onClick={handleAddToCart}>
            Add to cart
          </ProductAddToCartBtn>
        </GridItem>
      </Grid>
    </>
  );
}
