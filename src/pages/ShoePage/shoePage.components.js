import styled from 'styled-components';
import { ReactComponent as LeftArrowSvg } from '../../assets/arrow_left.svg';

export const GoBackButton = styled.button`
  background-color: transparent;
  padding: 0;
  margin: 0;
  outline: 0;
  border: none;
  margin: 5rem 0;
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const GoBackArrow = styled(LeftArrowSvg)`
  fill: ${({ theme: { color } }) => color.black};
`;
