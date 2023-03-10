import React from 'react'
import about from '../../assets/images/about.jpg'
import { Container } from '../../assets/styles/style';
import { Me } from './Me'
import { PersonalInfo } from './PersonalInfo'
import { AboutSection, AboutContainer, AboutMe, ImgAbout, ImgContainer, Shape, Zindex } from './StyledAbout';


export const About = () => {
  return (
    <AboutSection>
      <Container>
        <AboutContainer >
          <ImgContainer>
            <ImgAbout src={about} alt="Luis Olivares" title="Luis Olivares" />
          </ImgContainer>
          <AboutMe>
            <Me></Me>
            <PersonalInfo></PersonalInfo>

          </AboutMe>

        </AboutContainer>
      </Container>

    </AboutSection >
  )
}
