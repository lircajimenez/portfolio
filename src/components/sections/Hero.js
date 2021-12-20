import React from "react";
import styled from "styled-components";
import { COLORS } from "../../GlobalStyles";
import Typewriter from "typewriter-effect";
import avatar from "../../assets/pics/634A1382_crop.jpg";

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <img src={avatar} alt="Lirca Jiménez" />
        <h1>Lirca Jiménez</h1>
        <Effect>
          <Typewriter
            options={{
              strings: [
                "Full Stack Web Developer",
                "Photographer",
                "Risk Taker",
                "Sunset Lover",
              ],
              autoStart: true,
              loop: true,
              pauseFor: 2000,
              delay: "natural",
              deleteSpeed: "natural",
            }}
          />
        </Effect>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111111;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin-bottom: 2em;
  }
  h1 {
    font-size: 5rem;
    font-weight: 650;
    letter-spacing: 0.25rem;
    color: ${COLORS.pink};
    text-shadow: -3px 4px #111111, -5px 5.5px ${COLORS.yellow};
  }
`;
const Effect = styled.div`
  font-size: 1.45rem;
  letter-spacing: 0.15rem;
  margin-top: 15px;
`;

export default Hero;
