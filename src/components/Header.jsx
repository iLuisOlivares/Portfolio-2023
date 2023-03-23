import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #1a1919;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  @media (max-width: 900px) {
    margin-bottom: 30px
  }
`;

const Logo = styled.h1`
  font-size: 24px;
  margin: 10px;
  font-weight: bold;
  color: #333333;
  color: #E9E9DB;
`;


const MenuButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    background-color: #1a1919;
    display: block;
    border: none;
    font-size: 20px;
    color: #E9E9DB;
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
  color: #E9E9DB;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-color: #AF4C39;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: #E9E9DB;
  background-color: transparent;
  &:hover {
    text-decoration-color: #AF4C39;
  }
`

const logo = '<LuihOli>'
const Header = () => {
  return (
    <HeaderContainer>
      <Logo>{logo}</Logo>
      <MenuButton><StyledIcon icon={faBars}></StyledIcon></MenuButton>
      <NavMenu>
        <NavItem href="#">Inicio</NavItem>
        <NavItem href="#">Acerca</NavItem>
        <NavItem href="#">Habilidades</NavItem>
        <NavItem href="#">Contactame</NavItem>
        <NavItem href="#">Blog</NavItem>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
