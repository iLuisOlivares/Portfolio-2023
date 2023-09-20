import { H1A, letrasanimated } from '../../assets/styles/style'
import styled, { keyframes } from 'styled-components';


const P = styled.p`
  font-size:18px;
  color: #F0E3CA;
`;

const PB = styled.p`
  font-weight: bold;
  margin-top: 2px;
  margin-bottom: 2px;
  padding: 0;
  color: #F0E3CA;
  text-transform: uppercase;
  font-size:25px;
  transition: all .4s cubic-bezier(.15,.75,.45,.95);
  animation: ${letrasanimated} 15s ease-in-out infinite; 

`;


const B = styled.b`
 color: #1F1E1B;
 background-color: #e97c3d;
 border-radius: 10px;
 padding: 5px;
 margin: 2px;

`

const Divci = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px ;
  align-items: center;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  border-radius: 6px;
  height: 48px;
  width: 48px;
  color: #1f1e1b;
  font-size: 17px;
  font-weight: 600;
  background-color: #3d3636;
  border: 0;
  border-radius: 20px;
  cursor: pointer;
  transition: all .4s cubic-bezier(.15,.75,.45,.95);
  animation: ${letrasanimated} 15s ease-in-out infinite; 
  
  -webkit-box-shadow: 0px 15px 40px -10px #000000;
  @media screen and (max-width: 900px) {
    margin: 5px;
    height: 50px;
    border-radius: 10px;
    width: 320px;
  }
`;
const Got2 = styled.a`
  align-items: center;
  text-align: center;
  width: 100px;
  color: #1f1e1b;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all .4s cubic-bezier(.15,.75,.45,.95);
  animation: ${letrasanimated} 15s ease-in-out infinite; 
  
  -webkit-box-shadow: 0px 15px 40px -10px #000000;
  @media screen and (max-width: 900px) {
    margin: 5px;
    width: 320px;
  }
`;

export const Info = () => {
  return (
    <div>
      <H1A>Luis Olivares</H1A>
      <PB>Sotware developer </PB>
      <P>Systems engineering student, looking for new challenges.</P>
      <Divci>
        <form action="https://drive.google.com/file/d/1BUDqkyfj1uGI2iKJthRzjpMW4uxpoEri/view?usp=sharing">
          <Button type="submit"><i class="fa-solid fa-file-arrow-down"></i></Button>
        </form>
        {/* <Got2>Linkedin</Got2> */}

      </Divci>
    </div>
  )
}
