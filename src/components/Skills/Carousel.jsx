import React from 'react'
import springboot from '../../assets/images/springboot.png'
import js from '../../assets/images/js.png'
import java from '../../assets/images/java.png'
import git from '../../assets/images/git.png'
import react from '../../assets/images/react.png'
import styled from 'styled-components'
import { P } from '../../assets/styles/style'

const Slider = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 200px;
  
`;

const ImgDiv = styled.div`
    height: 120px;
    width: 100px;
    background-color: #141310;
    padding: 10px;
    border-radius: 10%;
    margin: 30px;
  -webkit-box-shadow: 0px 6px 10px -10px #5f5c5c;

    :hover{
        border-radius: 20% 30% 23% 90%/60% 30% 70% 40%;
        box-shadow: 0px 5px 1px 5px #af4d39b9;
    }
`;

const Img = styled.img`
    height: 50px;
    filter: grayscale(.9);
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
