import React, { useContext } from 'react';
import { ShopContext } from '../../store';
import { Section } from '../../components/ProductSection/productSection.components';
import { Grid, GridItem } from '../../styled/shared';
import {
  CartHeading,
  CartItem,
  CartProductName,
  CartProductDelBtn,
  CartProductPrice,
  CartProductImage,
  Summary,
} from './cartPage.components';

function CartPage() {
  const [state, dispatch] = useContext(ShopContext);

  const handleDeleteShoe = (id) => {
    dispatch({ type: 'DELETE_FROM_CART', payload: id });
  };

  const handleSummaryCost = state.cart.reduce(function (prev, cur) {
    return prev + cur.price;
  }, 0);

  const cartItems = state.cart.map((shoe) => {
    const {
      id,
      name,
      price,
      image: { url },
    } = shoe;
    return (
      <CartItem key={id}>
        <CartProductImage src={url} />
        <CartProductName>{name}</CartProductName>
        <CartProductPrice>{price}&euro;</CartProductPrice>
        <CartProductDelBtn onClick={() => handleDeleteShoe(id)}>
          Delete from cart
        </CartProductDelBtn>
      </CartItem>
    );
  });

  return (
    <Section>
      <CartHeading>Your cart</CartHeading>
      <Grid md={50}>
        <GridItem>
          {state.cart.length === 0 ? 'Your cart is empty' : cartItems}
          {state.cart.length !== 0 && (
            <Summary>Total cost: {handleSummaryCost} &euro;</Summary>
          )}
        </GridItem>
        <GridItem>
          <button>delivery and payment</button>
        </GridItem>
      </Grid>
    </Section>
  );
}

export default CartPage;
