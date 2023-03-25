import React from 'react'
import styled from 'styled-components';
import { H1, P } from '../assets/styles/style';

const PublicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 60%;
  min-height: 400px ;
  text-align: left;
  margin: 15px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url( ${props => props.url});
    background-size: cover;
    padding: 10px;
    border-radius: 10px;
  .Overlay{
    &:hover {
    bottom: 0;
    height: 100%;
    }
  }

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

`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;
const ImgContainer = styled.div`
    height: 300px;
    width: 300px;
    object-fit: cover;
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
                <div>
                    <Head>
                        <H1tittle>{tittle}</H1tittle>
                        <Pdate>{date}</Pdate>
                    </Head>
                    <P>{content}</P>
                </div>
                <ImgContainer>
                    <Img src={img}></Img>
                </ImgContainer>
            </ FlexContainer>



        </PublicationContainer >

    )
}
