import React from 'react'
import { Carousel } from './Carousel'
import styled from 'styled-components';
import { FlexTitle, H2, SpanA, SpanG } from '../../assets/styles/style';

const SkillsSection = styled.section`
  height: 70vh;
  width: 100%;
  display: flex ;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
  height: 70vh;
  padding-top: 50px;

  }
`;

const SkillsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  -webkit-box-shadow: 0px 15px 40px -10px #000000;
  padding: 20px;
  border-radius: 10px;
  width: 980px;

  @media screen and (max-width: 900px) {
      width: 340px;

  }
  
    

`;

const H2E = styled(H2)`
    margin: 5px;
`;





export const Skills = () => {
    return (
        <SkillsSection id='skills'>
            <SkillsContainer className='animate__animated animate__fadeInLeft animation-scroll-top'>
                <FlexTitle >
                    <H2E><SpanG>Skills</SpanG></H2E>
                </FlexTitle>
                <Carousel ></Carousel>
            </SkillsContainer>


        </SkillsSection >
    )
}
