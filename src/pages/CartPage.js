import React, { useContext } from 'react';
import styled from 'styled-components';
import { ShopContext } from '../store';
import { ReactComponent as DeleteIconSvg } from '../assets/delete.svg';
import { Layout, Typography, Button, Card } from '../styled_components';

const CartImage = styled(Card.Image)`
  height: 6rem;
  @media screen and (min-width: ${({ theme: { bp } }) => bp.tablet}) {
    height: 8rem;
  }
`;

const DeleteButton = styled(Button)`
  background-color: transparent;
  padding: 0.5rem;
  margin: 0;
`;

const DeleteIcon = styled(DeleteIconSvg)`
  fill: ${({ theme: { color } }) => color.danger};
`;

function CartPage() {
  const [state, dispatch] = useContext(ShopContext);
  const cartLength = state.cart.length;

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
      <Layout.Grid
        key={id}
        xs={25}
        sm={25}
        jusitfy='space-between'
        align='center'
        spacing={4}
      >
        <Layout.GridItem>
          <CartImage src={url} />
        </Layout.GridItem>
        <Layout.GridItem>
          <Typography.Paragraph>{name}</Typography.Paragraph>
        </Layout.GridItem>
        <Layout.GridItem>
          <Typography.Paragraph>{price} &euro;</Typography.Paragraph>
        </Layout.GridItem>
        <Layout.GridItem>
          <DeleteButton onClick={() => handleDeleteShoe(id)}>
            <DeleteIcon />
          </DeleteButton>
        </Layout.GridItem>
      </Layout.Grid>
    );
  });

  const GridItems = () => {
    if (cartLength === 0) {
      return <Typography.Paragraph>Your cart is empty</Typography.Paragraph>;
    }

    return cartItems;
  };

  return (
    <Layout.Divider>
      <Typography.Heading1>Your cart</Typography.Heading1>
      <Layout.Grid md={50}>
        <Layout.GridItem>
          <GridItems />
        </Layout.GridItem>
        <Layout.GridItem>
          <Typography.Paragraph isBold>
            Total cost: {handleSummaryCost} &euro;
          </Typography.Paragraph>
        </Layout.GridItem>
      </Layout.Grid>
    </Layout.Divider>
  );
}

export default CartPage;
