import React from 'react'
import { About } from '../components/About'
import Header from '../components/Header'
import { Presentation } from '../components/Presentation'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import Footer from '../components/Footer'
import { Blog } from './Blog'

export const Home = () => {
  return (
    <div>
      {/* <Header></Header>
      <Presentation></Presentation>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer> */}
      <Blog></Blog>
    </div>
  )
}
