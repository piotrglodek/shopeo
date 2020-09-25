import React from 'react';
import { CartLink, CartIcon, CartItemsCounter } from './cart.components';

function Cart() {
  return (
    <CartLink to='/cart'>
      <CartIcon />
      <CartItemsCounter>1</CartItemsCounter>
    </CartLink>
  );
}

export default Cart;
