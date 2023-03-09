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
    color: #A2E199;
`;

export const H2A = styled.h1`
    color: #0052B6

`;
export const H2 = styled.h2`
    color: #6CA965;
    font-size: 2em ;
    margin: 10px;
`;

export const H2L = styled.h2`
    color: #DDF8D7;
    font-size: 2em ;
`;


