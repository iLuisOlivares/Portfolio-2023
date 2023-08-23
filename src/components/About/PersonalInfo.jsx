import React from 'react'
import { B, SpanA } from '../../assets/styles/style'
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
  font-size:20px;
  margin: 2px;
  color: #E9E9DB;
  padding: 10px;
`;

export const PersonalInfo = () => (
  <Infocont>
    <P>
      <SpanA><b>Cellphone:</b></SpanA> (+57) 318 4544 760
    </P>
    <P>
      <SpanA><b>Email:</b></SpanA> luissolivaresp@gmail.com
    </P>
    {/* <P>
      <SpanB><b>Cellphone: </b></SpanB> (+57) 318 4544 760
    </P>
    <P>

      <SpanB><b>Email: </b></SpanB> luissolivaresp@gmail.com
    </P> */}
  </Infocont>
)
