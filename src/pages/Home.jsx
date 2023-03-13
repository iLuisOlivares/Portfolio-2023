import React from 'react'
import { About } from '../components/About'
import { Presentation } from '../components/Presentation'
import { Skills } from '../components/Skills'

export const Home = () => {
  return (
    <div>
      <Presentation></Presentation>
      <About></About>
      <Skills></Skills>
    </div>
  )
}
