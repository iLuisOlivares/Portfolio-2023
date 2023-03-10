import styled from 'styled-components';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;600&display=swap');
</style>

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #47D95B;
  justify-content: space-around;
  height: 100vh;
  width: 100%;
  @media screen and (max-width: 1000px) {
  height: 900px;
  z-index: 1;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: auto;
  
  @media screen and (max-width: 1000px) {
  flex-direction: column-reverse;

  justify-content: space-around;
  align-items: center;
}

`;

export const AboutMe = styled.div`
width: 50%;
height: 500px;
text-align: left;
color: black;
@media screen and (max-width: 1000px) {
  width: 345px; 
  height: auto;
}
`;


export const Zindex = styled.div`
z-index: 1;
color: black;
`;



export const P = styled.p`
  font-size:22px;
  margin: 10px;
`;

export const B = styled.b`
  font-weight: bold;
  color: #E9E9DB;
  font-size:22px;
`;


export const ImgAbout = styled.img`
   width: 100%;
  height: 350px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 6px 8px -5px rgba(22, 18, 18, 0.9);
  box-shadow: 0px 5px 15px -5px rgba(14, 10, 10, 0.9);
  @media screen and (max-width: 1000px) {
    margin: 5px;
    height: 290px;
    width: 320px;
}
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1000px) {
    margin: 5px;
    height: 290px;
    width: 320px;
}
`;

