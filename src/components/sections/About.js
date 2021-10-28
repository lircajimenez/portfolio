import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <p>ABOUT ME</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  border: 5px yellow solid;
`;

export default About;
