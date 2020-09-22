import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '../../styled/shared';
// icons
import { ReactComponent as MenuSvg } from '../../assets/menu.svg';
import { ReactComponent as CloseSvg } from '../../assets/close.svg';

export const Nav = styled.nav`
  padding: 1.4rem 0;
  width: 100%;
`;
export const NavContainer = styled.div`
  ${Container}
  display:flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavLogo = styled(Link)`
  text-decoration: none;
  color: ${({ theme: { color } }) => color.black};
  font-size: 3.4rem;
  font-weight: bold;
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
  }
`;
export const NavMenuItem = styled.li``;
export const NavMenuLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme: { color } }) => color.black};
  font-size: 1.6rem;
  padding: 1rem 2rem;
  transition: text-shadow 0.2s ease;
  &:hover {
    text-shadow: 0px 0px 1px ${({ theme: { color } }) => color.black};
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
