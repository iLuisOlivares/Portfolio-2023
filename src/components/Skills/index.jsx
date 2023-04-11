import React from 'react'
import { Carousel } from './Carousel'
import styled from 'styled-components';
import { H2 } from '../../assets/styles/style';

const SkillsSection = styled.section`
  height: 70vh;
  width: 100%;
  display: flex ;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
  height: 70vh;

  }
`;

const SkillsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

const H2E = styled(H2)`
    margin-bottom: 10px;
    margin-top: 25px ;
`;




export const Skills = () => {
    return (
        <SkillsSection id='skills'>
            <SkillsContainer>
                <H2E>Skills</H2E>
                <Carousel></Carousel>
            </SkillsContainer>


        </SkillsSection>
    )
}
