import React from 'react'
import styled from 'styled-components';
import { H2, P, SpanB } from '../../assets/styles/style';
import { ProjectComponent } from './ProjectComponent';


const ProjectsSection = styled.section`
  width: 100%;
  display: flex ;
  justify-content: center;
  justify-items: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    padding-top: 50px;
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
  padding-bottom: 40px;
`;

const Divflex = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
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

const SocialIcon = styled.a`
  color: #fff;
  font-size: 20px;
`;
export const Projects = () => {

  return (
    <DemoWrap className='animation-scroll-top2'>
      <ProjectsSection id='projects'>
        <DemoBg

        />
        <ProjectsContainer className='animate__animated animate__fadeInLeft'>
          <H2><SpanB>Projects</SpanB></H2>


          <ProjectComponent title={"SuperHeroe App"}
            type={"Fullstack-Project"}
            description={"A superhero web page where you can find all of your favorite superheroess"}
            tech={['react', 'django', 'postgre', 'bootstrap']}
            imgL={"https://res.cloudinary.com/iluiss/image/upload/v1693763084/Heroes/m9w8fns8inqqaggihxsh.png"}
            video={"https://www.youtube.com/embed/Icxl-AILx50?si=r_f-jvEOj7YPefa8"}
          ></ProjectComponent>
          <ProjectComponent title={"Nuestros recuerdos"}
            type={"Fullstack Project"}
            description={"A website with a timeline where you can treasure your favorite memories"}
            tech={['react', 'springboot', 'mysql', 'css']}
            imgL={"https://res.cloudinary.com/iluiss/image/upload/v1694809630/Recuerdos%20Lucas/cd7xpslibzpksywituqo.png"}
          ></ProjectComponent>
          <ProjectComponent title={"Mechanical Assistant"}
            type={"Backend Project"}
            description={"REST API for mechanical services in the city of Cartagena"}
            tech={['springboot', 'springsecurity', 'postgre', 'swagger']}
            imgL={"https://res.cloudinary.com/iluiss/image/upload/v1694811056/Logos/oh1enlt88mavcik0dbsq.png"}
          ></ProjectComponent>
          <ProjectComponent title={"Cape gooseberry and strawberry classifier"}
            type={"Artificial Intelligence Project"}
            description={"A classifier that identifies cape gooseberry and strawberry in an image using the opencv library and the sklearn library in python"}
            tech={['python', 'sklearn', 'opencv']}
            imgL={"https://res.cloudinary.com/iluiss/image/upload/v1694812372/Logos/urfs8a1xupjnesroxab3.png"}
            repo={"https://github.com/iLuisOlivares/Clasificador-Fresas-y-Uchuvas"}
            link={"https://colab.research.google.com/drive/1i0srXVyX3fYZJoem1Bk-NFgT270R__OI?usp=sharing"}
          ></ProjectComponent>

          <Divflex>
            <h5>More projects in my github</h5>
            <SocialIcon href="https://github.com/iLuisOlivares"><i class="fa-brands fa-github"></i></SocialIcon>

          </Divflex>
        </ProjectsContainer>

      </ProjectsSection >
    </DemoWrap >
  )
}
