import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <p>HERO</p>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  border: 5px violet solid;
`;

export default Hero;
