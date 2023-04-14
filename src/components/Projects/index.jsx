import React from 'react'
import styled from 'styled-components';
import { H2, P } from '../../assets/styles/style';


const ProjectsSection = styled.section`
  height: 50vh;
  width: 100%;
  display: flex ;
  justify-content: center;
  justify-items: center;
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
    width: 980px;
  -webkit-box-shadow: 0px 15px 40px -10px #000000;
  padding: 20px;
  border-radius: 10px;
  width: 980px;

  @media screen and (max-width: 900px) {
      width: 340px;

  }

`;

const DemoWrap = styled.div`
  overflow: hidden;
  position: relative;
`;
const DemoBg = styled.img`
   opacity: 0.2;
   filter: blur(30px);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
`;

const content = "<  Comming soon / >"
export const Projects = () => {

    return (
        <DemoWrap>
            <ProjectsSection id='projects'>
                <DemoBg
                    src="https://p4.wallpaperbetter.com/wallpaper/218/743/753/digital-art-orange-background-black-white-wallpaper-preview.jpg"

                />
                <ProjectsContainer className='animate__animated animate__fadeInLeft'>
                    <H2>Projects</H2>
                    <P>{content}</P>
                    <P>Working in this section...<H2 href="">SOON AS POSIBLE</H2>
                    </P>
                </ProjectsContainer>

            </ProjectsSection >
        </DemoWrap>
    )
}
