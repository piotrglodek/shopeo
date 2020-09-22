import React from 'react';
import { CartLink, CartIcon, CartItemsCounter } from './cart.components';

function Cart(props) {
  const {
    cartProps: { cartItemsCount },
  } = props;
  return (
    <CartLink to='/cart'>
      <CartIcon />
      {cartItemsCount > 0 && (
        <CartItemsCounter>{cartItemsCount}</CartItemsCounter>
      )}
    </CartLink>
  );
}

export default Cart;
