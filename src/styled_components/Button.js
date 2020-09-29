import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme: { color } }) => color.black};
  outline: none;
  border: none;
  margin: 1.6rem 0;
  border-radius: 0.4rem;
  cursor: pointer;
  color: ${({ theme: { color } }) => color.white};
  font-weight: 700;
  font-size: 1.6rem;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  padding: 1.2rem 2rem;

  ${({ primary, theme: { color } }) =>
    primary &&
    `
    background-color: ${color.primary};
    &:hover{
        background-color: ${color.darkPrimary};
    }
  `}

  ${({ danger, theme: { color } }) =>
    danger &&
    `
    background-color: ${color.danger};
    &:hover{
        background-color: ${color.darkDanger};
    }
  `}    

  ${({ small }) =>
    small &&
    `
    padding: .8rem 1.4rem;
  `}
`;

Button.propTypes = {
  primary: PropTypes.bool,
  danger: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
  danger: false,
  small: false,
};
