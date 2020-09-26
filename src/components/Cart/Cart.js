import React from 'react';
import { CartLink, CartIcon, CartItemsCounter } from './cart.components';

function Cart(props) {
  const { cartItems } = props;
  const cartItemsLength = cartItems.length;
  return (
    <CartLink to='/cart'>
      <CartIcon />
      {cartItemsLength !== 0 && (
        <CartItemsCounter>{cartItemsLength}</CartItemsCounter>
      )}
    </CartLink>
  );
}

export default Cart;
