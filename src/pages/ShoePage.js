import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { ShopContext } from '../store';
import { Layout, Card, Arrow, Button } from '../styled_components';

export default function ShoePage() {
  let history = useHistory();
  let { id } = useParams();
  const goToPrevLocation = () => history.goBack();
  const [state, dispatch] = useContext(ShopContext);
  const shoe = state.shoes.find((shoe) => shoe.id === id);
  const {
    name,
    price,
    image: { url },
  } = shoe;

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: shoe });
  };

  return (
    <Layout.Divider>
      <Arrow.Button onClick={goToPrevLocation}>
        <Arrow.LeftIcon />
      </Arrow.Button>
      <Layout.Grid spacing={4} sm={50}>
        <Layout.GridItem>
          <Card.Image src={url} />
        </Layout.GridItem>
        <Layout.GridItem>
          <Card.Title>{name}</Card.Title>
          <Card.SubTitle>{price}&euro;</Card.SubTitle>
          <Button onClick={handleAddToCart} primary>
            add to cart
          </Button>
        </Layout.GridItem>
      </Layout.Grid>
    </Layout.Divider>
  );
}
