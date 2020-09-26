import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductLink = styled(Link)`
  text-decoration: none;
  display: block;
  width: 100%;
  padding: 2rem 0;

  @media screen and (min-width: 360px) {
    width: 32rem;
    padding: 2rem;
  }
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.2rem;
  background-color: ${({ theme: color }) => color.white};
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const ProductImage = styled.img`
  display: block;
  width: 25rem;
  height: 25rem;
`;
export const ProductDetails = styled.div``;

const sharedStyle = css`
  color: ${({ theme: { color } }) => color.black};
  margin: 0;
`;

export const ProductName = styled.p`
  ${sharedStyle}
  font-size: 1.6rem;
  padding: 1.4rem 0;
`;
export const ProductCost = styled.p`
  ${sharedStyle}
  font-size: 2.2rem;
`;