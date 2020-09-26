import React from 'react';
import {
  ProductLink,
  ProductWrapper,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductCost,
} from './product.components';

function Product(props) {
  const { shoe } = props;
  const {
    id,
    name,
    price,
    image: { url },
  } = shoe;

  return (
    <ProductLink to={`/shoe/${id}}`}>
      <ProductWrapper>
        <ProductImage src={url} />
        <ProductDetails>
          <ProductName>{name}</ProductName>
          <ProductCost>{price} &euro;</ProductCost>
        </ProductDetails>
      </ProductWrapper>
    </ProductLink>
  );
}

export default Product;
