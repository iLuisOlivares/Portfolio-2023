import React from 'react'
import { Container } from '../../assets/styles/style';
import { Me } from './Me'
import { PersonalInfo } from './PersonalInfo'
import styled from 'styled-components';


const AboutSection = styled.section`
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  @media screen and (max-width: 900px) {
  height: 480px;
  z-index: 1;
  }
`;

const AboutMe = styled.div`
width: 70%;
text-align: left;
color: black;
@media screen and (max-width: 900px) {
  width: 345px; 
  height: 480px;
}
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: space-around;  
  @media screen and (max-width: 900px) {
  flex-direction: column-reverse;
  justify-content: space-around;
  align-items: center;
}

`;



export const About = () => {
  return (
    <AboutSection id='about'>
      <Container>
        <AboutContainer >
          <AboutMe className='animate__animated animate__fadeInLeft'>
            <Me></Me>
            <PersonalInfo></PersonalInfo>

          </AboutMe>

        </AboutContainer>
      </Container>

    </AboutSection >
  )
}
