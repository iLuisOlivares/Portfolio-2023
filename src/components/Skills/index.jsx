import React from 'react'
import { Carousel } from './Carousel'
import styled from 'styled-components';
import { H2 } from '../../assets/styles/style';

const SkillsSection = styled.section`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
  }
`;

const SkillsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

`;

export const Skills = () => {
    return (
        <SkillsSection>
            <SkillsContainer>
                <H2>Habilidades</H2>
                <Carousel></Carousel>
            </SkillsContainer>


        </SkillsSection>
    )
}
