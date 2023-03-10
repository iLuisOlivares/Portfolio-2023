import styled from 'styled-components';
<style>
    @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;600&display=swap');
</style>

export const EducationSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  width: 100%;
  @media screen and (max-width: 1000px) {
  height: 900px;
  z-index: 1;
  }
`;

export const EducationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: auto;
  
  @media screen and (max-width: 1000px) {
  flex-direction: column-reverse;

  justify-content: space-around;
  align-items: center;
}

`;

export const EducationContent = styled.div`
width: 50%;
height: 500px;
text-align: left;
color: black;
@media screen and (max-width: 1000px) {
  width: 345px; 
  height: auto;
}
`;

