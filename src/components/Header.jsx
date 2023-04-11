import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter, useLocation } from 'react-router-dom';
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 97%;
  padding: 20px;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #1a1919;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  @media (max-width: 900px) {
    margin-bottom: 60px;
    width: 95%;

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

const NavItem = styled(LinkScroll)`
  margin-left: 20px;
  font-size: 16px;
  color: #333333;
  color: #E9E9DB;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
    text-decoration-color: #AF4C39;
    cursor: pointer;
  }
`;
const NavRouter = styled(LinkRouter)`
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
  const location = useLocation();
  return (
    <HeaderContainer>
      <Logo>{logo}</Logo>
      <MenuButton><StyledIcon icon={faBars}></StyledIcon></MenuButton>
      <NavMenu>
        {
          location.pathname === '/' ? <div>
            <NavItem to='home' spy={true} smooth={true} offset={-200} duration={500}>Home</NavItem>
            <NavItem to="about" spy={true} smooth={true} offset={-200} duration={500}>About</NavItem>
            <NavItem to='skills' spy={true} smooth={true} offset={-80} duration={500}>Skills</NavItem>
            <NavItem to='projects' spy={true} smooth={true} offset={0} duration={500}>Projects</NavItem>
            <NavRouter to='/blog'>Blog</NavRouter>
          </div> : <div>
            <NavRouter to='/#'>Home</NavRouter>
            <NavRouter to='/blog'>Blog</NavRouter>
          </div>
        }

      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
