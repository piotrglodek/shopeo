import propTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Link)`
  text-decoration: none;
  width: 100%;
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

export const Image = styled.div`
  width: 100%;
  height: 24.8rem;
  background: url(${({ src }) => src}) no-repeat center center;
  background-size: contain;
  margin: 0 auto;
`;

const sharedStyle = css`
  color: ${({ theme: { color } }) => color.black};
`;

export const Title = styled.p`
  ${sharedStyle}
  font-size:2rem;
  margin: 1.8rem 0;
`;
export const SubTitle = styled.p`
  ${sharedStyle}
  font-size:1.6rem;
  font-weight: 700;
`;

Wrapper.propTypes = {
  to: propTypes.string.isRequired,
};

Image.propTypes = {
  src: propTypes.string.isRequired,
};
