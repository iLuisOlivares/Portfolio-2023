import React from 'react'
import springboot from '../../assets/images/springboot.png'
import js from '../../assets/images/js.png'
import java from '../../assets/images/java.png'
import git from '../../assets/images/git.png'
import react from '../../assets/images/react.png'
import styled from 'styled-components'
import { P } from '../../assets/styles/style'

const Slider = styled.div`
   display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 20px;
grid-row-gap: 20px;
    @media screen and (max-width: 900px) {
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
}
`;

const ImgDiv = styled.div`
    height: 120px;
    width: 100px;
    background-color: #00000083;
    padding: 10px;
    border-radius: 10%;
    margin: 30px;
-webkit-box-shadow: 0px 15px 10px -10px #0f0d0d;
transition: all 0.5s ease-in-out;

    @media screen and (max-width: 900px) {
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        margin: 10px;

    }
    :hover{
-webkit-box-shadow: 0px 10px 10px -8px #9dff65;

    }
   
`;

const Img = styled.img`
    height: 50px;
    padding: 12px;
    /* filter: grayscale(.9); */
    @media screen and (max-width: 900px) {
    height: 20px;
    margin: 5px;
    }
`;


export const Carousel = () => {

    return (
        <Slider>
            <ImgDiv>
                <Img src={js} alt="javascript" />
                <P>Javascript</P>
            </ImgDiv>
            <ImgDiv>
                <Img src={react} alt="React" />
                <P>React</P>

            </ImgDiv>
            <ImgDiv>
                <Img src={java} alt="Java" />
                <P>Java</P>

            </ImgDiv>
            <ImgDiv>
                <Img src={springboot} alt="springboot" />
                <P>SpringBoot</P>

            </ImgDiv>
            <ImgDiv>
                <Img src={git} alt="Git" />
                <P>Git</P>
            </ImgDiv>

        </Slider>
    );
}
