import React from 'react'
import { Publication } from '../components/Publication'
import styled from 'styled-components'
import { H1L } from '../assets/styles/style';
import Lucas1 from '../assets/images/Lucas1.jpg'
import Lucas2 from '../assets/images/Lucas2.jpeg'

const BlogSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  @media screen and (max-width: 900px) {
  }
  
`;

const BlogContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: auto;
 

`;


export const Blog = () => {
  return (
    <BlogSection>
      <H1L>My Blog</H1L>
      <BlogContainer>
        <Publication img={Lucas1}></Publication>
        <Publication img={Lucas2}></Publication>
        <Publication></Publication>
        <Publication></Publication>
        <Publication></Publication>
        <Publication></Publication>
      </BlogContainer>

    </BlogSection>
  )
}
