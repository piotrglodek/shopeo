import React from 'react';
import { Card } from '../../styled_components';

function Product(props) {
  const { shoe } = props;
  const {
    id,
    name,
    price,
    image: { url },
  } = shoe;

  return (
    <Card.Wrapper to={`/shoe/${id}`}>
      <Card.Image src={url} />
      <Card.Title>{name}</Card.Title>
      <Card.SubTitle>{price} &euro;</Card.SubTitle>
    </Card.Wrapper>
  );
}

export default Product;
