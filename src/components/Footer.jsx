import styled from 'styled-components';
import { SpanA, SpanB, SpanR } from '../assets/styles/style';

const FooterContainer = styled.footer`
  background-color: #1a1a1a;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 50px;
  }
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 16px;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 15px;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 20px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 50px;
  }
`;

const Footer = () => {
  const left = "</"
  const right = ">"
  const logo = "LuisOli"

  return (
    <FooterContainer>
      <Container>
        <SocialIconsContainer>
          <SocialIcon href="https://www.linkedin.com/in/luissolivaresp/"><i class="fa-brands fa-linkedin"></i></SocialIcon>
          <SocialIcon href="https://github.com/iLuisOlivares"><i class="fa-brands fa-github"></i></SocialIcon>
          <SocialIcon href="mailto:luissolivaresp@gmail.com"><i class="fa-solid fa-envelope"></i></SocialIcon>
        </SocialIconsContainer>
        <FooterText> © 2023  <SpanB> {left}</SpanB>{logo}<SpanR>{right}</SpanR>
        </FooterText>
      </Container>
    </FooterContainer>


  );
};

export default Footer;
