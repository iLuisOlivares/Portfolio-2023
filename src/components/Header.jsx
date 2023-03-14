import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #ffffff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 24px;
  margin: 10px;
  font-weight: bold;
  color: #333333;
`;

const MenuButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
    border: none;
    background-color: transparent;
    font-size: 20px;
    color: #333333;
    cursor: pointer;
  }
`;

const NavMenu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.a`
  margin-left: 20px;
  font-size: 16px;
  color: #333333;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const logo = '<LuihOli>'
const Header = () => {
  return (
    <HeaderContainer>
      <Logo>{logo}</Logo>
      <MenuButton>Menu</MenuButton>
      <NavMenu>
        <NavItem href="#">Inicio</NavItem>
        <NavItem href="#">Acerca</NavItem>
        <NavItem href="#">Habilidades</NavItem>
        <NavItem href="#">Contactame</NavItem>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
