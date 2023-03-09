import styled from 'styled-components';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;600&display=swap');
</style>

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 900px;
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: auto;
  @media screen and (max-width: 640px) {
  flex-direction: column-reverse;

  justify-content: space-around;
  align-items: center;
}

`;

export const AboutMe = styled.div`
width: 50%;
height: 500px;
text-align: left;
@media screen and (max-width: 640px) {
  width: 345px; 
  height: auto;
}
`;

export const P = styled.p`
  font-weight: bold;
  margin: 10px;
  font-size:22px;
`;

export const ImgAbout = styled.img`
   width: 100%;
  height: 350px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 6px 8px -5px rgba(22, 18, 18, 0.9);
  box-shadow: 0px 5px 15px -5px rgba(14, 10, 10, 0.9);
  @media screen and (max-width: 640px) {
    margin: 5px;
    height: 290px;
    width: 320px;
}
`;