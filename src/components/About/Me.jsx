import React from 'react'
import styled from 'styled-components';
import { H2, SpanA, SpanBlacSpanBlack, SpanBlack, SpanG, SpanR } from '../../assets/styles/style';

const P = styled.p`
    color: #E9E9DB;
    font-size: 20px;
`;

export const Me = () => {
  return (
    <div>
      <H2 style={{ textAlign: "center" }}><SpanA>Me</SpanA></H2>
      <P class="text">Hey! <SpanBlack>I'm Luis Olivares</SpanBlack>, a systems engineering student in the ninth semester of the University of Cartagena, Colombia.</P>
      <P class="text">I am currently dedicated to <SpanBlack>web development</SpanBlack>, immersing myself in self-guided exploration and knowledge acquisition. Nevertheless, <SpanBlack>my ardent passion for technology</SpanBlack> makes any tech-related domain exceptionally captivating to me. I'm at the outset of my journey, poised to craft my unique narrative.</P>





    </div>
  )
}
