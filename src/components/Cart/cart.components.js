import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as CartSvg } from '../../assets/shopping_cart.svg';

export const CartLink = styled(Link)`
  width: 3.6rem;
  height: 3.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  text-decoration: none;
`;

export const CartIcon = styled(CartSvg)`
  fill: ${({ theme: { color } }) => color.black};
  height: 2.4rem;
  width: 2.4rem;
  stroke: ${({ theme: { color } }) => color.black};
  transition: stroke-width 0.3s ease;
  ${CartLink}:hover & {
    stroke-width: 0.8rem;
  }
`;

export const CartItemsCounter = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  background-color: ${({ theme: { color } }) => color.black};
  color: ${({ theme: { color } }) => color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 400;
`;
