import React from 'react'
import { Container, ImgContainer } from '../../assets/styles/style'
import { ImgPresentation, InfoContainer, PresentationContainer, PresentationSection } from './StyledPresentation'
import about from '../../assets/images/about.jpg'
import { Info } from './Info'
export const Presentation = () => {
  return (
    <PresentationSection>
      <Container>
        <PresentationContainer>
          <InfoContainer>
            <Info></Info>
          </InfoContainer>
          <ImgContainer>
            <ImgPresentation src={about} alt="" />
          </ImgContainer>
        </PresentationContainer>
      </Container>
    </PresentationSection>
  )
}
