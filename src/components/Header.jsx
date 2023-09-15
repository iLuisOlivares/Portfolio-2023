import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter, useLocation } from 'react-router-dom';
import { Container, SpanA, SpanB, SpanG, decorationanimated, letrasanimated } from '../assets/styles/style';
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 82%;
  border-radius: 0px 0px 10px 10px;
  padding: 20px;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #1a1919;
  /* box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1); */
  @media (max-width: 900px) {
    margin-bottom: 60px;
    width: 100%;
    flex-direction: column;
    padding: 5px;


  }
`;



const Logo = styled.h1`
  font-size: 24px;
  margin: 10px;
  font-weight: bold;
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
`;


const NavItem = styled(LinkScroll)`
  margin: 15px;
  font-size: 16px;
  color: #333333;
  color: #E9E9DB;
  text-decoration: none;

  @media (max-width: 900px) {
    margin:10px
  }
  
  &:hover {
    text-decoration: overline;
    animation: ${decorationanimated} 2s ease-in-out infinite;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }
`;


const NavRouter = styled(LinkRouter)`
  margin: 15px;
  font-size: 16px;
  color: #333333;
  color: #E9E9DB;
  text-decoration: none;

  @media (max-width: 900px) {
    margin:10px
  }

  &:hover {
    text-decoration: underline;
    
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: #E9E9DB;
  background-color: transparent;
  &:hover {
    text-decoration-color: #e97c3d;
  }
`

const left = "<"
const right = ">"
const logo = "LO"
const Header = () => {
  const location = useLocation();
  return (


    <Container>
      <HeaderContainer>
        <Logo><SpanA>{left}</SpanA> {logo} <SpanG>{right}</SpanG></Logo>
        <NavMenu>
          {
            location.pathname === '/' ? <div>
              <NavItem to='home' spy={true} smooth={true} offset={-200} duration={500}>Home</NavItem>
              <NavItem to="about" spy={true} smooth={true} offset={-200} duration={500}>About</NavItem>
              <NavItem to='skills' spy={true} smooth={true} offset={-80} duration={500}>Skills</NavItem>
              <NavItem to='projects' spy={true} smooth={true} offset={0} duration={500}>Projects</NavItem>
              {/* <NavRouter to='/blog'>Blog</NavRouter> */}
            </div> : <div>
              <NavRouter to='/#'>Home</NavRouter>
              <NavRouter to='/blog'>Blog</NavRouter>
            </div>
          }

        </NavMenu>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
