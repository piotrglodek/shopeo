import React, { useState, useContext } from 'react';
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
import { ShopContext } from '../../store';

function Navigation() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prevState) => !prevState);

  const [state] = useContext(ShopContext);

  const menu = state.categories.map((cat) => {
    const { name, slug } = cat;
    return (
      <NavMenuItem key={slug}>
        <NavMenuLink onClick={toggleMenu} to={`/${slug}`}>
          {name}
        </NavMenuLink>
      </NavMenuItem>
    );
  });

  return (
    <Nav>
      <NavContainer>
        <NavLogo to='/'>
          Shopeo
          <LogoIcon />
        </NavLogo>
        <NavMenu isOpen={isOpen}>
          <NavMenuItem>
            <NavMenuLink onClick={toggleMenu} to='/'>
              All shoes
            </NavMenuLink>
          </NavMenuItem>
          {menu}
        </NavMenu>
        <Cart />
        <NavHamburger onClick={toggleMenu}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </NavHamburger>
      </NavContainer>
    </Nav>
  );
}

export default Navigation;
