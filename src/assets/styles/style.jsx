import styled, { keyframes } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Space Mono','Inconsolata', sans-serif;
    color: #E9E9DB;
    
  }
`;

export const Container = styled.div`
    width: 85%;
|    max-width: 1250px;
    margin: 0 auto;
`;

export const H1 = styled.h2`
    color: #e97c3d;
`;

export const H1A = styled.h1`
    color: #e97c3d;
    font-size: 2em;
    margin-bottom: 10px;

`;
export const H1L = styled.h1`
    color: #E9E9DB;
    font-size: 2em;
    margin: 20px;

`;
export const H2 = styled.h2`
    font-size: 2m ;
    color: #e97c3d;
    margin: 5px;
    padding: 2px;
  /* -webkit-box-shadow: 0px 8px 8px -10px #000000; */
  /* border-radius: 12px; */
    border-width: 10px;
`;

export const H2L = styled.h2`
    color: #E9E9DB;
    font-size: 2em ;
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


export const Button = styled.button`
border-radius: 6px;
    height: 48px;
    width: 160px;
    color: #1F1E1B;
    font-size: 17px;
    font-weight: 600;
    background-color: #e97c3d;
    border: 0;
    cursor: pointer;
  -webkit-box-shadow: 0px 15px 40px -10px #000000;
    @media screen and (max-width: 900px) {
    margin: 5px;
    height: 50px;
    border-radius: 20px;
    width: 320px;
}
`;


export const P = styled.p`
  font-size:15px;
  color: #E9E9DB;

`;

export const B = styled.b`
  font-weight: bold;
  color: #e97c3d;

  font-size:15px;
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
`
const animate2 = keyframes`
  0% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }

  50%{
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
   
  }

  100%{
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }
`

export const ImgPresentation2 = styled.div`
  height: 400px;
  width: 300px;
  text-align: center;
  transform: rotate(40deg);
  background-color: #03030365;
  animation: ${animate} 5s ease-in-out infinite;
transation: all 0.5s ease-in-out;
  -webkit-box-shadow: 5px 6px 8px -10px rgb(20, 19, 16);
  position: absolute;
  @media screen and (max-width: 900px) {
      margin: 10px;
    height: 250px;
}
`;
export const ImgPresentation3 = styled(ImgPresentation2)`
transform: rotate(67deg);
opacity: 90%;
background-color: #e97c3d;
animation: ${animate2} 5s ease-in-out infinite;
transation: all 0.5s ease-in-out;
-webkit-box-shadow: 5px 6px 8px -10px #141310;
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
