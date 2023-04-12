import React from 'react'
import styled from 'styled-components';
import { H1, P } from '../assets/styles/style';

const PublicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 80%;
  height: auto;
  text-align: left;
  margin: 15px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url( ${props => props.url});
  background-size: cover;
  padding: 10px;
  border-radius: 10px;

`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;  
 
`;

const Pdate = styled(P)`
  font-size:10px;
  margin: 5px;

`;
const H1tittle = styled(H1)`
  margin-bottom: 2px;
  color: #e97c3d

`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 800px) {
    flex-direction: column-reverse;
  }
  


`;
const ImgContainer = styled.div`
    height: 300px;
    min-width: 300px;
    padding: 10px;
    object-fit: cover;
`;

const TextContainer = styled.div`
    padding: 10px;
`;

const Img = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 3px;
    object-fit: cover;

`;
export const Publication = ({
  tittle = 'tittle', content = 'Lorem Ipsum es simplemente el texto de re', date = "2021-02-02", img = "https://media.licdn.com/dms/image/C4D16AQFMcaLeGa6r6Q/profile-displaybackgroundimage-shrink_350_1400/0/1639028308638?e=1684972800&v=beta&t=M2aERRDGaHBlTs6yWxKpuAaNw-4XaMkF8dYOMXRwX3k" }) => {
  return (
    <PublicationContainer url={img}>
      < FlexContainer >
        <TextContainer>
          <Head>
            <H1tittle>{tittle}</H1tittle>
            <Pdate>{date}</Pdate>
          </Head>
          <P>{content}</P>

        </TextContainer>
        <ImgContainer>
          <Img src={img}></Img>
        </ImgContainer>
      </ FlexContainer>



    </PublicationContainer >

  )
}
