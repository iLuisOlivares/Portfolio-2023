import styled from 'styled-components';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;600&display=swap');
</style>

export const PresentationSection = styled.section`
  display: flex;
  color: #4980c4;
  flex-direction: column;
  background-color: #f5f5f1;
  justify-content: space-around;
  height: 100vh;
  width: 100%;
  @media screen and (max-width: 1000px) {
  height: 900px;
  }
`;

export const PresentationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: auto;
  @media screen and (max-width: 1000px) {
  flex-direction: column-reverse;
  justify-content: space-around;
  align-items: center;
}

`;

export const InfoContainer = styled.div`
width: 50%;
height: 500px;
text-align: left;
display: flex;
align-items: center;
align-content: center;
@media screen and (max-width: 1000px) {
  width: 345px; 
  height: auto;
}
`;

export const P = styled.p`
  font-size:22px;
  color: #000;
`;

export const PB = styled.p`
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 2px;
  color: #4980c4;
  text-transform: uppercase;
  font-size:15px;
`;


export const ImgPresentation = styled.img`
   width: 100%;
  height: 350px;
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  -webkit-box-shadow: 0px 6px 8px -5px #4980c4;
  box-shadow: 0px 5px 1px 5px #4980c4;
  @media screen and (max-width: 1000px) {
    margin: 5px;
    height: 290px;
    width: 320px;
}
`;

