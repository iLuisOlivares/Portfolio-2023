import React from 'react'
import { Container, ImgContainer } from '../../assets/styles/style'
import about from '../../assets/images/about.jpg'
import { Info } from './Info'
import styled from 'styled-components';

const PresentationSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  width: 100%;
  @media screen and (max-width: 900px) {
  height: 90vh;
  }
  
`;

const PresentationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: auto;
  @media screen and (max-width: 900px) {
      height: 90vh;
  flex-direction: column-reverse;
  justify-content: space-around;
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
const ImgPresentation2 = styled.div`
  height: 350px;
  width: 250px;
  text-align: center;
  transform: rotate(40deg);
  background-color: #1a1919;
  border-radius: 40% 20% 40% 30%/40% 40% 50% 30%;
  -webkit-box-shadow: 5px 6px 8px -10px rgb(20, 19, 16);
  position: absolute;
  @media screen and (max-width: 900px) {
      margin: 10px;
    height: 250px;
}
`;
const ImgPresentation3 = styled(ImgPresentation2)`
transform: rotate(67deg);
opacity: 90%;
background-color: #AF4C39;
  border-radius: 20% 30% 23% 90%/60% 30% 70% 40%;

  -webkit-box-shadow: 5px 6px 8px -10px #141310;
`;


export const Presentation = () => {
  return (
    <PresentationSection>
      <Container>
        <PresentationContainer>
          <InfoContainer>
            <Info></Info>
          </InfoContainer>
          <ImgContainer>
            <Imgs>
              <ImgPresentation2 src={about} alt="" />
              <ImgPresentation3 src={about} alt="" />
              <ImgPresentation src={about} alt="" />
            </Imgs>
          </ImgContainer>
        </PresentationContainer>
      </Container>
    </PresentationSection>
  )
}
