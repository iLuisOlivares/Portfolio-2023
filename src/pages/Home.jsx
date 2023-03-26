import React from 'react'
import { About } from '../components/About'
import Header from '../components/Header'
import { Presentation } from '../components/Presentation'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import Footer from '../components/Footer'
import { Blog } from './Blog'
import styled from 'styled-components'
export const Home = () => {

  const HomseSection = styled.div`
@media screen and (max-width: 900px) {
  margin-top: 100px;
}

`;
  return (
    <HomseSection>
      <Presentation></Presentation>
      <About id='Acerca'></About>
      <Skills></Skills>
      <Projects></Projects>
    </HomseSection>
  )
}
