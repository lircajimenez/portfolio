import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <Wrapper id={"projects"}>
      <h1>PROJECTS</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  background: #1f2020;
  color: white;
  border: 5px green solid;
`;

export default Projects;
