import { Button, H1A } from '../../assets/styles/style'
import styled from 'styled-components';

const P = styled.p`
  font-size:15px;
  font-family: 'Inconsolata', monospace;
  color: #F0E3CA;
`;

const PB = styled.p`
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 2px;
  color: #F0E3CA;
  text-transform: uppercase;
  font-size:20px;
`;

const B = styled.b`
 color: #1F1E1B;
 background-color: #e97c3d;
 border-radius: 10px;
 padding: 5px;
 margin: 2px;

`

export const Info = () => {
  return (
    <div>
      <H1A>Luis Olivares</H1A>
      <PB>Sotware developer <B>Junior</B></PB>
      <P>Systems engineering student, looking for new challenges.</P>
      <form action="https://docs.google.com/document/d/19H1VVRYTRw2cwequo2OUKi8_7Shs-KJu2wxNFeAymdQ/edit?usp=sharing">
        <Button type="submit">Download CV</Button>
      </form>
    </div>
  )
}
