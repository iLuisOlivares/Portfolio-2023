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
    tittle: "Mi mascota Lucas 🐾",
    content: "Lucas fue mi mejor amigo, me enseñó lo que era amar y cuánto dolía perder algo que en verdad te importa. Fue y siempre sera de los seres vivos más importantes para mí. Era un loquillo, pero la mayoría del tiempo era muy calmado. Realmente no era un perro que hiciera mucho ruido, pero solo sentándose a tu lado ya sentías el apoyo que necesitabas para seguir adelante. También sabía cómo contagiar la felicidad. Cada recuerdo que tengo de él está lleno de este sentimiento. como saltar cuando sabia que ibamos a pasear, las veces que haciamos carreras y me ganaba, caminar por la playa y dormir juntos simplemente seran los mejores recuerdos de mi vida. Te extraño Lucas y por ti siempre voy a a salir adelante ❤️.",
    img: Luis4,
    date: "2023-03-25"

  },
  {
    tittle: "Quien es Luis 👋🏼",
    content: "Luis para los amigos, Sebastián para la familia, Soy Luis Olivares, una persona alegre que le encanta estar rodeado de amigos con los que compartir nuevas experiencias y crear recuerdos de los cuales sabe que va a estar feliz cuando en el futuro se encuentre mirando atrás. Soy una persona trabajadora, amable y muy responsable. Lo que más me gusta en la vida es realizar actividades físicas, salir con mis amigos y probar cosas nuevas. Mi mayor sueño es ser feliz y que en algún punto de mi vida pueda decir que estoy en mi lugar ideal.",
    img: Luis2,
    date: "2023-03-25"
  },
  {
    tittle: "Mi Familia 👨‍👩‍👦‍👦",
    content: "Mi familia es lo más importante en mi vida y cada uno de ellos tiene un lugar especial en mi corazón. Mi padre es una persona fuerte y disciplinada, un verdadero ejemplo a seguir. Siempre he sentido orgullo de él y de todo lo que ha logrado en su vida. Mi madre, por otro lado, es una mujer cariñosa aunque no lo muestre abiertamente, siempre ha estado ahí para mí, apoyándome y haciendo todo lo posible para que yo sea feliz. Disfruto mucho caminar y hablar con ella. Mi hermano es el niño más gracioso e inteligente que conozco. Aunque no nos llevamos siempre bien, es la persona a la que más quiero en el mundo. Además, siempre me hace reír. Lucas, nuestra mascota, era un miembro más que ya falleció pero que sigue vivo en nuestros corazones, lo queríamos demasiado. Por suerte, llegó Valiente, nuestra nueva mascota, quien ha alegrado el vacío que dejó Lucas. La familia es algo que siempre debo cuidar y valorar, son mi mayor tesoro.",
    img: Family,
    date: "2023-03-25"
  },
  {
    tittle: "Mis hobbies al aire libre 🏞️",
    content: "Me encanta ser una persona activa y siempre estar en movimiento. Desde pequeño he disfrutado jugando futbol ⚽️, basketball 🏀, natacion 🏊‍♂️ y cualquier otro deporte 🤸🏼, también me encanta explorar el mundo bajo el agua con el buceo 🌊. Para nadie es un secreto que me apasionan las actividades físicas que me desafían a correr, saltar y moverme, especialmente si es acompañado de amigos. Para mí, la vida es una aventura que me encanta explorar a través de mi cuerpo y mente en constante movimiento.⛹️, Tambien me gusta bailar pero no soy muy bueno para ello ajaja.  La foto es el parque al que suelo ir cuando me encuentro en Bogota.",
    img: Place,
    date: "2023-03-25"
  },
  {
    tittle: "Mis hobbies en casa 🏡",
    content: "Desde que era niño, me apasionó la tecnología y los videojuegos 🕹️. Es por eso que me involucré en el mundo del desarrollo de software 🧑‍💻 y razon por la que decidi estudiar ingenieria de sistemas. Ahora, mis pasatiempos consisten en aprender cosas nuevas sobre programación 💻️, seguir las últimas novedades tecnológicas 🪙 y disfrutar de una que otra serie de comedia, romance o algo relacionado con superpoderes 🦸, si.. suena un poco nerd ajaja. En un futuro me gustaria comprar una camara y aprender a tomar fotos 📸.",
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
