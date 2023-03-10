import React from 'react'
import { About } from '../components/About'
import { Education } from '../components/Education'
import { Presentation } from '../components/Presentation'

export const Home = () => {
  return (
    <div>
      <Presentation></Presentation>
      <About></About>
      <Education></Education>
    </div>
  )
}
