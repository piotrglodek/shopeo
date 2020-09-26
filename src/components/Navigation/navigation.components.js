import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../styled/shared';
// icons
import { ReactComponent as MenuSvg } from '../../assets/menu.svg';
import { ReactComponent as CloseSvg } from '../../assets/close.svg';
import { ReactComponent as LogoSvg } from '../../assets/shoe.svg';

export const Nav = styled.nav`
  padding: 1.4rem 0;
  width: 100%;
`;
export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavLogo = styled(Link)`
  text-decoration: none;
  color: ${({ theme: { color } }) => color.black};
  font-size: 3.4rem;
  font-weight: bold;
  display: flex;
  align-items: center;
`;
export const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  transition: all 0.3s ease;
  @media screen and (max-width: ${({ theme: { bp } }) => bp.tablet}) {
    position: absolute;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    bottom: 0;
    width: 100%;
    z-index: 999;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${({ theme: { color } }) => color.white};
    padding-top: 6.4rem;
  }
`;
export const NavMenuItem = styled.li`
  @media screen and (max-width: ${({ theme: { bp } }) => bp.tablet}) {
    width: 100%;
  }
`;
export const NavMenuLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: ${({ theme: { color } }) => color.black};
  font-size: 1.6rem;
  padding: 1rem 2rem;
  transition: text-shadow 0.2s ease;
  &:hover {
    text-shadow: 0px 0px 1px ${({ theme: { color } }) => color.black};
  }
  @media screen and (max-width: ${({ theme: { bp } }) => bp.tablet}) {
    text-align: center;
    padding: 2rem;
  }
`;
export const NavHamburger = styled.button`
  padding: 0;
  border: none;
  width: 3.6rem;
  height: 3.6rem;
  outline: none;
  background: none;
  cursor: pointer;
  z-index: 999;
  @media screen and (min-width: ${({ theme: { bp } }) => bp.tablet}) {
    display: none;
  }
`;

export const MenuIcon = styled(MenuSvg)`
  width: 24px;
  fill: ${({ theme: { color } }) => color.black};
`;
export const CloseIcon = styled(CloseSvg)`
  width: 24px;
  fill: ${({ theme: { color } }) => color.black};
`;

export const LogoIcon = styled(LogoSvg)`
  fill: ${({ theme: { color } }) => color.black};
  margin-left: 1rem;
  width: 3rem;
  height: 3rem;
  @media screen and (max-width: ${({ theme: { bp } }) => bp.tablet}) {
    display: none;
  }
`;
