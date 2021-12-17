import React from "react";
import styled from "styled-components";
import avatar from "../../assets/pics/634A1382_crop.jpg";

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <img src={avatar} alt="Lirca Jiménez" />
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
    width: 300px;
    height: 300px;
    border-radius: 50%;
    margin-bottom: 2em;
  }
  h1 {
    font-size: 5rem;
    font-weight: 650;
    letter-spacing: 0.25rem;
    color: #cf0593;
    text-shadow: -3px 4px #111111, -5px 5.5px #f0e227;
  }
`;

export default Hero;
