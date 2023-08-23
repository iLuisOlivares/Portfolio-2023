import styled, { keyframes } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Raleway","sans-serif ";
    color: #E9E9DB;
    
  }
`;

export const Container = styled.div`
  width: 85%;
  max-width: 1250px;
  margin: 0 auto;
`;

export const H1 = styled.h2`
  color: #fffefe;
`;

export const H1A = styled.h1`
  color: #e9e9db;
  font-size: 2.2em;
  margin-bottom: 0px;
`;
export const H1L = styled.h1`
  color: #e9e9db;
  font-size: 2em;
  margin: 20px;
`;
export const H2 = styled.h2`
  font-size: 2m;
  color: #fffefe;
  margin: 5px;
  padding: 2px;
  /* -webkit-box-shadow: 0px 8px 8px -10px #000000; */
  /* border-radius: 12px; */
  border-width: 10px;
`;

export const H2L = styled.h2`
  color: #e9e9db;
  font-size: 2em;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 640px) {
    margin: 5px;
    height: 290px;
    width: 320px;
  }
`;


export const P = styled.p`
  font-size: 15px;
  color: #e9e9db;
`;

export const B = styled.b`
  font-weight: bold;
  color: #fffefe;

  font-size: 20px;
`;

const animate = keyframes`
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }

  50%{
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }

  100%{
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
`;
const animate2 = keyframes`
  0% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  background-color: #9dff65;
  }
  25% {

  background-color: #65c1ff;
  }

  50%{
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    background-color: #fd9191;
   
  }
  75%{
  background-color: #ffd665;
   
  }

  100%{
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;

    background-color: #9dff65;

  }
`;

export const letrasanimated = keyframes`
  0% {
 color: #9dff65;


  }
  25% {
 color: #65c1ff;

  }

  50%{
   color: #fd9191;
   
  }
  75%{
 color: #ffd665;
   
  }

  100%{
 color: #9dff65;

  }
`

export const decorationanimated = keyframes`
  0% {
 text-decoration-color: #9dff65;


  }
  25% {
 text-decoration-color: #65c1ff;

  }

  50%{
   text-decoration-color: #fd9191;
   
  }
  75%{
 text-decoration-color: #ffd665;
   
  }

  100%{
 text-decoration-color: #9dff65;

  }
`


export const SpanA = styled.span`
  color: #ffd665;

`;
export const SpanBlack = styled.span`
  font-weight: bold;
  text-decoration: wavy;
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: #464242;

`;
export const SpanR = styled.span`
  color: #fd9191; 

`;
export const SpanG = styled.span`
  color: #9dff65;

`;
export const SpanB = styled.span`
  color: #65c1ff;
  
`;


export const ImgPresentation2 = styled.div`
  height: 400px;
  width: 300px;
  text-align: center;
  transform: rotate(40deg);
  background-color: #03030365;
  animation: ${animate} 15s ease-in-out infinite;
  transition: all 0.5s ease-in-out;
  -webkit-box-shadow: 1px 1px 1px -5px #000000;

  position: absolute;
  @media screen and (max-width: 900px) {
    margin: 10px;
    height: 250px;
  }
`;
export const ImgPresentation3 = styled(ImgPresentation2)`
  transform: rotate(67deg);
  opacity: 90%;
  background-color: #fffefe;
  transition: all .4s cubic-bezier(.15,.75,.45,.95);
  animation: ${animate2} 15s ease-in-out infinite; 
  -webkit-box-shadow: 1px 1px 1px -5px #000000;
`;

export const FlexTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`;

export const BoxIcon = styled.div`
  margin-right: 5px;
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const MiniIcon2 = styled(ImgPresentation2)`
  height: 30px;
  width: 30px;
`;

export const MiniIcon3 = styled(ImgPresentation3)`
  height: 30px;
  width: 30px;
`;
