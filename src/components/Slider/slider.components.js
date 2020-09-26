import styled, { css } from 'styled-components';
import { ReactComponent as nextArrowSvg } from '../../assets/arrow_right.svg';
import { ReactComponent as prevArrowSvg } from '../../assets/arrow_left.svg';

const shared = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  outline: none;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: transparent;
  transition: all 0.3s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  &::after {
    content: none;
  }
`;

export const SwiperArrowNextButton = styled.button`
  ${shared}
  right:10px;
`;

export const SwiperArrowPrevButton = styled.button`
  ${shared}
  left:10px;
`;

export const SwiperNextArrow = styled(nextArrowSvg)``;
export const SwiperPrevArrow = styled(prevArrowSvg)``;
