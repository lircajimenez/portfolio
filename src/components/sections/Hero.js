import React from "react";
import styled from "styled-components";
import avatar from "../../assets/pics/avatar.png";

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <img src={avatar} alt="Lirca Jiménez picture" />
        <h1>Lirca Jiménez</h1>
        <p>Full Stack web developer</p>
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
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-bottom: 2em;
  }
  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: 0.25rem;
    color: #9d046f;
  }
`;

export default Hero;
