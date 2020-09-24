import React from 'react';
import PropTypes from 'prop-types';
import {
  ProductWrapper,
  ProductLink,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductCost,
} from './product.components';

function Product(props) {
  const { to } = props;
  return (
    <ProductLink to={to}>
      <ProductWrapper>
        <ProductImage src='' alt='' />
        <ProductDetails>
          <ProductName></ProductName>
          <ProductCost></ProductCost>
        </ProductDetails>
      </ProductWrapper>
    </ProductLink>
  );
}

export default Product;

Product.propTypes = {
  to: PropTypes.string.isRequired,
};
