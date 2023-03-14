import React from 'react'
import { About } from '../components/About'
import Header from '../components/Header'
import { Presentation } from '../components/Presentation'
import { Skills } from '../components/Skills'

export const Home = () => {
  return (
    <div>
      <Header></Header>
      <Presentation></Presentation>
      <About></About>
      <Skills></Skills>
    </div>
  )
}
