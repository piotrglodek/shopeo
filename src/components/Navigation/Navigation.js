import React, { useState } from 'react';
import {
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  NavMenuItem,
  NavMenuLink,
  NavHamburger,
  MenuIcon,
  CloseIcon,
  LogoIcon,
} from './navigation.components';
import { Cart } from '../';

function Navigation(props) {
  const { cartProps } = props;
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prevState) => !prevState);

  return (
    <Nav>
      <NavContainer>
        <NavLogo to='/'>
          Shopeo
          <LogoIcon />
        </NavLogo>
        <NavMenu isOpen={isOpen}>
          <NavMenuItem>
            <NavMenuLink onClick={toggleMenu} to='/mens'>
              mens
            </NavMenuLink>
          </NavMenuItem>
          <NavMenuItem>
            <NavMenuLink onClick={toggleMenu} to='/womens'>
              womens
            </NavMenuLink>
          </NavMenuItem>
        </NavMenu>
        <Cart cartProps={cartProps} />
        <NavHamburger onClick={toggleMenu}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </NavHamburger>
      </NavContainer>
    </Nav>
  );
}

export default Navigation;
