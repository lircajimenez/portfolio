import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <p>HERO</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  border: 5px violet solid;
`;

export default Hero;
