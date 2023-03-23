import React from 'react'
import { Button, H1A } from '../../assets/styles/style'
import styled from 'styled-components';

const P = styled.p`
  font-size:15px;
  font-family: 'Inconsolata', monospace;
  color: #F0E3CA;
`;

const PB = styled.p`
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 2px;
  color: #F0E3CA;
  text-transform: uppercase;
  font-size:20px;
`;

const B = styled.b`
 color: #1F1E1B;
 background-color: #AF4C39;
 border-radius: 10px;
 padding: 5px;
 margin: 2px;

`

export const Info = () => {
  return (
    <div>
      <H1A>Luis Olivares</H1A>
      <PB>Desarollador Web <B>Junior</B></PB>
      <P>Estudiante ingenieria de sistemas, en busca de nuevos desafios y retos.</P>
      <Button>Descargar CV</Button>

    </div>
  )
}
