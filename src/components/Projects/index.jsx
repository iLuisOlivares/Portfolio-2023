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
            <ProjectsContainer className='animate__animated animate__fadeInLeft'>
                <H2>Projects</H2>
                <P>{content}</P>
                <P>Working in this section... <H2 href="">Click here in the future</H2> </P>
            </ProjectsContainer>

        </ProjectsSection >
    )
}
