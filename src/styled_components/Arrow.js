import styled, { css } from 'styled-components';
import { ReactComponent as LeftIconSvg } from '../assets/arrow_left.svg';
import { ReactComponent as RightIconSvg } from '../assets/arrow_right.svg';

/*
FIXME: 
    props:
        customMargin
*/
export const Button = styled.button`
  background-color: transparent;
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: grid;
  place-items: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const sharedIconStyles = css`
  fill: ${({ theme: { color } }) => color.black};
  width: 3rem;
  height: 3rem;
`;

export const LeftIcon = styled(LeftIconSvg)`
  ${sharedIconStyles}
`;
export const RightIcon = styled(RightIconSvg)`
  ${sharedIconStyles}
`;
