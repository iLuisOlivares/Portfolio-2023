import React from 'react'
import { Publication } from '../components/Publication'
import styled from 'styled-components'
import { H1L } from '../assets/styles/style';
import Lucas1 from '../assets/images/Lucas1.jpg'
import Luis2 from '../assets/images/Luis2.jpg'
import Luis4 from '../assets/images/Luis4.jpg'
import Place from '../assets/images/Place.jpg'
import Me from '../assets/images/Me4.jpg'
import Family from '../assets/images/Family.jpg'


const BlogSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  margin-top: 100px;
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

const publications = [
  {
    tittle: "My pet Lucas 🐾",
    content: "Lucas was my best friend, he taught me what love was and how much it hurt to lose something that truly mattered to you. He was and will always be really important to me. He was a little crazy, but most of the time he was very calm. He wasn't really a noisy dog, but just sitting next to him made you feel the support you needed to keep going. He also knew how to spread happiness. Every memory I have of him is filled with this feeling, like jumping around when he knew we were going for a walk, the times we raced and he beat me, walking on the beach and sleeping together will simply be the best memories of my life. I miss you Lucas and I will always push forward for you ❤️.",
    img: Luis4,
    date: "2023-03-25"

  },
  {
    tittle: "Who is Luis 👋🏼",
    content: "Luis to friends, Sebastián to family, I am Luis Olivares, a cheerful person who loves being surrounded by friends with whom to share new experiences and create memories that I know I will be happy to look back on in the future. I am a hardworking, kind, and very responsible person. What I love most in life is doing physical activities, going out with my friends, and trying new things. My biggest dream is to be happy and to be able to say at some point in my life that I am in my ideal place.",
    img: Me,
    date: "2023-03-25"
  },
  {
    tittle: "My Family 👨‍👩‍👦‍👦",
    content: "My family is the most important thing in my life, and each of them has a special place in my heart. My father is a strong and disciplined person, a true role model. I have always felt proud of him and everything he has achieved in his life. My mother, on the other hand, is a loving woman, although she doesn't show it openly. She has always been there for me, supporting me, and doing everything possible to make me happy. I enjoy walking and talking with her a lot. My brother is the funniest and smartest kid I know. Although we don't always get along, he is the person I love the most in the world. Besides, he always makes me laugh. Lucas, our pet, was another family member who has passed away but still lives on in our hearts. We loved him so much. Fortunately, Valiente, our new pet, arrived and has filled the void that Lucas left. Family is something I must always take care of and cherish; they are my greatest treasure.",
    img: Family,
    date: "2023-03-25"
  },
  {
    tittle: "My outdoor hobbies 🏞️",
    content: "I love being an active person and always being on the move. Since I was a child, I have enjoyed playing soccer ⚽️, basketball 🏀, swimming 🏊‍♂️, and any other sport 🤸🏼. I also love exploring the underwater world with scuba diving 🌊. It's no secret that I am passionate about physical activities that challenge me to run, jump, and move, especially if it's with friends. For me, life is an adventure that I love to explore through my constantly moving body and mind ⛹️. This photo is when I went to the coffe-park ☕️ in armenia, It was a very fun and active day",
    img: Place,
    date: "2023-03-25"
  },
  {
    tittle: "My hobbies in general 🏓",
    content: "Since I was a child, I have been passionate about technology and video games 🕹️. That's why I got involved in the world of software development 🧑‍💻 and why I decided to study systems engineering. Now, my hobbies consist of learning new things about programming and technology 💻️, Go out with my friends 🌇 and enjoying the occasional series of comedy, romance or something related to superpowers 🦸. One os the most important things in my life is to be able to share my hobbies with my friends and family, that's why I love to go out with them and have a good time.",
    img: Luis2,
    date: "2023-03-25"
  }
]


export const Blog = () => {
  return (
    <BlogSection>
      <H1L>My Blog</H1L>
      <BlogContainer className='animate__animated animate__fadeInUp'>

        {publications.map((publication, index) => (
          <Publication key={index} {...publication} />
        ))}

      </BlogContainer>

    </BlogSection>
  )
}
