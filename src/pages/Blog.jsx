import React from 'react'
import { Publication } from '../components/Publication'
import styled from 'styled-components'
import { H1L } from '../assets/styles/style';
import Lucas1 from '../assets/images/Lucas1.jpg'
import Luis2 from '../assets/images/Luis2.jpg'
import Luis4 from '../assets/images/Luis4.jpg'
import Place from '../assets/images/Place.jpg'
import Me from '../assets/images/Me.jpeg'
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
    content: "Lucas was my best friend, he taught me what love was and how much it hurt to lose something you truly care about. He was and will always be one of the most important living beings for me. He was a crazy dog, but most of the time he was very calm. He really wasn't a dog that made a lot of noise, but just sitting by your side you felt the support you needed to move on. He also knew how to spread happiness. Every memory I have of him is filled with this feeling, like jumping when he knew we were going for a walk, the times we raced and he won, walking on the beach, and sleeping together will simply be the best memories of my life. I miss you Lucas and I will always move forward for you ❤️.",
    img: Luis4,
    date: "2023-03-25"

  },
  {
    tittle: "Who is Luis 👋🏼",
    content: "Luis for friends, Sebastian for family, I am Luis Olivares, a cheerful person who loves to be surrounded by friends with whom to share new experiences and create memories that he knows he will be happy with when he looks back in the future. I am a hardworking, kind, and very responsible person. What I like most in life is to engage in physical activities, go out with my friends, and try new things. My biggest dream is to be happy and that at some point in my life I can say that I am in my ideal place.",
    img: Luis2,
    date: "2023-03-25"
  },
  {
    tittle: "My Family 👨‍👩‍👦‍👦",
    content: "My family is the most important thing in my life and each of them has a special place in my heart. My father is a strong and disciplined person, a true role model. I have always felt proud of him and everything he has achieved in his life. My mother, on the other hand, is a loving woman, although she doesn't show it openly, she has always been there for me, supporting me and doing everything possible to make me happy. I really enjoy walking and talking with her. My brother is the funniest and smartest kid I know. Although we don't always get along, he is the person I love the most in the world. Also, he always makes me laugh. Lucas, our pet, was another member who has already passed away but still lives on in our hearts, we loved him so much. Luckily, Valiente, our new pet, came along, who has filled the void left by Lucas. Family is something I must always take care of and value, they are my greatest treasure.",
    img: Family,
    date: "2023-03-25"
  },
  {
    tittle: "My outdoor hobbies 🏞️",
    content: "I love being an active person and always being on the move. Since I was little, I've enjoyed playing soccer ⚽️, basketball 🏀, swimming 🏊‍♂️, and any other sport 🤸🏼. I also love exploring the underwater world with scuba diving 🌊. It's no secret that I'm passionate about physical activities that challenge me to run, jump, and move, especially if it's with friends. For me, life is an adventure that I love to explore through my constantly moving body and mind.⛹️, I also like dancing, but I'm not very good at it haha. The photo is from the park I usually go to when I'm in Bogota.",
    img: Place,
    date: "2023-03-25"
  },
  {
    tittle: "My hobbies in general 🏡",
    content: "Since I was a kid, I've been passionate about technology and video games 🕹️. That's why I got involved in the world of software development 🧑‍💻 and why I decided to study systems engineering. Now, my hobbies consist of learning new things about programming 💻️, following the latest technological news 🪙, and enjoying a comedy, romance, or something related to superpowers 🦸 every now and then, yeah... it sounds a bit nerdy haha. In the future, I would like to buy a camera and learn how to take photos 📸.",
    img: Me,
    date: "2023-03-25"
  }
]


export const Blog = () => {
  return (
    <BlogSection>
      <H1L>My Blog</H1L>
      <BlogContainer>

        {publications.map((publication, index) => (
          <Publication key={index} {...publication} />
        ))}

      </BlogContainer>

    </BlogSection>
  )
}
