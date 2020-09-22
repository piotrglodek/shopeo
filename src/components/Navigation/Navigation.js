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
} from './navigation.components';

function Navigation() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prevState) => !prevState);

  return (
    <Nav>
      <NavContainer>
        <NavLogo to='/'>Shopeo</NavLogo>
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

        <NavHamburger onClick={toggleMenu}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </NavHamburger>
      </NavContainer>
    </Nav>
  );
}

export default Navigation;
