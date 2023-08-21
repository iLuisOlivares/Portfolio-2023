import React from 'react'
import { Container, ImgContainer, ImgPresentation2, ImgPresentation3 } from '../../assets/styles/style'
import foto from '../../assets/images/Me42.jpg'
import { Info } from './Info'
import styled from 'styled-components';

const PresentationSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  width: 100%;
  /* @media screen and (max-width: 900px) {
  height: 90vh;
  } */
  
`;

const PresentationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: auto;
  @media screen and (max-width: 900px) {
      height: 90vh;
  flex-direction: column;
  align-items: center;
}

`;


const InfoContainer = styled.div`
width: 50%;
height: 500px;
text-align: left;
display: flex;
align-items: center;
align-content: center;
@media screen and (max-width: 900px) {
  width: 345px; 
  height: 400px;
}
`;

const Imgs = styled.div`
    height: 350px;
    width: 320px;
    display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 900px) {
  height: 250px; 
}

`;



const ImgPresentation = styled.img`
  height: 350px;
text-align: center;
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  position: absolute;
  @media screen and (max-width: 900px) {
      margin: 10px;
    height: 250px;
}
`;

const DemoWrap = styled.div`
  overflow: hidden;
  position: relative;
`;
const DemoBg = styled.img`
   opacity: 0.1;
   filter: blur(5px);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
`;




export const Presentation = () => {
  return (
    <DemoWrap>
      <PresentationSection id='home'>
        <Container>
          <DemoBg
            src={"https://thumbs.dreamstime.com/b/desktop-source-code-technology-background-developer-programer-coding-programming-wallpaper-computer-language-125215647.jpg"}
          />
          <PresentationContainer className='animate__animated animate__fadeInLeft'>
            <InfoContainer>
              <Info></Info>
            </InfoContainer>
            <ImgContainer>
              <Imgs>
                <ImgPresentation2 src={foto} alt="" />
                <ImgPresentation3 src={foto} alt="" />
                <ImgPresentation src={foto} alt="" />
              </Imgs>
            </ImgContainer>
          </PresentationContainer>
        </Container>
      </PresentationSection>
    </DemoWrap>
  )
}
