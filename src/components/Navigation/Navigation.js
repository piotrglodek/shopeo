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
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen((prevState) => !prevState);

  const { cart, categories } = props;

  const menu = categories.map((cat) => {
    const { name, slug } = cat;
    return (
      <NavMenuItem key={slug}>
        <NavMenuLink onClick={toggleMenu} to={`/category/${slug}`}>
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
        <Cart cartItems={cart} />
        <NavHamburger onClick={toggleMenu}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </NavHamburger>
      </NavContainer>
    </Nav>
  );
}

export default Navigation;
