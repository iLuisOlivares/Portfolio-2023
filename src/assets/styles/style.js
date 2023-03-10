import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;600&display=swap');

  body {
    font-family: 'Dosis', sans-serif;
  }
`;

export const Container = styled.div`
    width: 85%;
    max-width: 1250px;
    margin: 0 auto;
`;

export const H1 = styled.h2`
    color: #7C7F50;
`;

export const H1A = styled.h1`
    color: #3dc44f;
    font-size: 2em;
    margin-bottom: 10px;

`;
export const H2 = styled.h2`
    font-size: 2em ;
    margin: 10px;
    color: #E9E9DB;
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
    color: rgb(255, 255, 255);
    font-size: 17px;
    font-weight: normal;
    background-color: #47D95B;
    border: 0;
    cursor: pointer;
`;