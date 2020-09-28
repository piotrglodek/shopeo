import styled from 'styled-components';
import {
  ProductAddToCartBtn,
  ProductCost,
  ProductName,
  ProductImage,
} from '../../components/Product/product.components';

export const CartHeading = styled.h2`
  margin: 0;
  padding-bottom: 0.4rem;
  font-size: 3rem;
  color: ${({ theme: { color } }) => color.black};
`;

export const CartItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem;
`;

export const CartProductName = styled(ProductName)`
  margin: 0 2rem;
`;

export const CartProductPrice = styled(ProductCost)``;

export const CartProductImage = styled(ProductImage)`
  width: 9rem;
  height: 9rem;
  margin: 0;
`;

export const CartProductDelBtn = styled(ProductAddToCartBtn)`
  background-color: ${({ theme: { color } }) => color.danger};
  font-size: 1.4rem;
  margin: 0;
  padding: 1rem;
  &:hover {
    background-color: ${({ theme: { color } }) => color.darkDanger};
  }
`;

export const Summary = styled.p`
  color: ${({ theme: { color } }) => color.primary};
  font-weight: 700;
  font-size: 1.6rem;
`;
