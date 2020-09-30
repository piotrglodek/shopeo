import React, { useContext } from 'react';
import styled from 'styled-components';
import { ShopContext } from '../store';
import { ReactComponent as DeleteIconSvg } from '../assets/delete.svg';
import { Layout, Typography, Button, Card } from '../styled_components';

const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.4rem 0;
`;

const ShoeImage = styled(Card.Image)`
  width: 6.4rem;
  height: 6.4rem;
  margin: 0;
`;

const ShoeText = styled(Typography.Paragraph)`
  padding: 0;
  margin: 0 1.6rem;
`;

const DeleteButton = styled(Button)`
  background-color: transparent;
  padding: 0;
  margin: 0;
  display: grid;
  place-items: center;
`;

const DeleteIcon = styled(DeleteIconSvg)`
  fill: ${({ theme: { color } }) => color.danger};
  width: 3.2rem;
  height: 3.2rem;
  &:hover {
    fill: ${({ theme: { color } }) => color.darkDanger};
  }
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
      <Row key={id}>
        <ShoeImage src={url} />
        <ShoeText>{name}</ShoeText>
        <ShoeText isBold>{price} &euro;</ShoeText>
        <DeleteButton onClick={() => handleDeleteShoe(id)}>
          <DeleteIcon />
        </DeleteButton>
      </Row>
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
