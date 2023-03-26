import React from 'react'
import styled from 'styled-components';
import { H2, P } from '../../assets/styles/style';


const ProjectsSection = styled.section`
  height: auto;
  width: 100%;
  display: flex ;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
  height: 70vh;

  }
`;

const ProjectsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

const content = "<  Comming soon / >"
export const Projects = () => {

    return (
        <ProjectsSection id='projects'>
            <ProjectsContainer>
                <H2>Proyectos</H2>
                <P>{content}</P>
                <P>Trabajando en esta seccion... <H2 href="">Click here</H2> </P>
            </ProjectsContainer>

        </ProjectsSection >
    )
}
