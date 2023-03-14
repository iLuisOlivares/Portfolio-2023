import React from 'react'
import { Container } from '../../assets/styles/style';
import { Me } from './Me'
import { PersonalInfo } from './PersonalInfo'
import styled from 'styled-components';

const AboutMe = styled.div`
width: 70%;
height: 400px;
text-align: left;
color: black;
@media screen and (max-width: 1000px) {
  width: 345px; 
  height: auto;
}
`;

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 200px;
  width: 100%;
  @media screen and (max-width: 1000px) {
  height: 405px;
  z-index: 1;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 200px;
  
  @media screen and (max-width: 1000px) {
  flex-direction: column-reverse;

  justify-content: space-around;
  align-items: center;
}

`;



export const About = () => {
  return (
    <AboutSection>
      <Container>
        <AboutContainer >
          <AboutMe>
            <Me></Me>
            <PersonalInfo></PersonalInfo>

          </AboutMe>

        </AboutContainer>
      </Container>

    </AboutSection >
  )
}
