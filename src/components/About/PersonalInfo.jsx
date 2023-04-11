import React from 'react'
import { B } from '../../assets/styles/style'
import styled from 'styled-components';


const Infocont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  @media screen and (max-width: 900px) {
    height: 90px;
    flex-direction: column;
    text-align: left; 
    align-items: flex-start;

}
`;

const P = styled.p`
  font-size:15px;
  margin: 2px;
  color: #E9E9DB;
  padding: 10px;
`;

export const PersonalInfo = () => (
  <Infocont>
    <P>
      <B>Cellphone</B>: (+57) 318 4544 760
    </P>
    <P>
      <B>Mail</B>: luissolivaresp@gmail.com
    </P>
  </Infocont>
)
