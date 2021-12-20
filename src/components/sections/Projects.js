import React from "react";
import styled from "styled-components";
import { COLORS } from "../../GlobalStyles";

import wandergram1 from "../../assets/projects/map.mov";
import wandergram2 from "../../assets/projects/sign-in.mov";
import wandergram3 from "../../assets/projects/upload-demo.mov";

const Projects = () => {
  return (
    <Wrapper id={"projects"}>
      <Project>
        <Description>
          <Title>
            <h2>Wandergram</h2>
            <button>View details</button>
          </Title>
          <Details>
            <p>
              Wandergram is a web app that allows the user to explore a city
              through beautiful photographs and explore the location of some of
              them in a map. User needs to create an account in order to upload
              images.
            </p>
            <p>
              <b>Technologies:</b> React.js, Node.js, Express, MongoDB, CSS,
              Styled Components, Cloudinary, GoogleMaps API.
            </p>
            <p>
              <b>Demo:</b> https://youtu.be/laiCjnJ4rPg
            </p>
          </Details>
        </Description>
        <Gallery>
          <Video src={wandergram1} autoPlay="true" muted loop />
          <Video src={wandergram2} autoPlay="true" muted loop />
          <Video src={wandergram3} autoPlay="true" muted loop />
        </Gallery>
      </Project>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  /* height: 100vh; */
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1f2020;
  border: 3px violet solid;
`;
const Project = styled.section`
  display: flex;
  flex-direction: column;
  margin: 40px 20px;
  border: 2px green solid;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  display: flex;
  border: 2px red solid;
`;
const Details = styled.div`
  width: 50%;
  text-align: center;
  margin-top: 25px;

  p {
    margin-top: 15px;
  }
`;
const Gallery = styled.div`
  display: flex;
  width: calc(100% - 40px);
  overflow-x: scroll;
`;
const Video = styled.video`
  height: 500px;
  margin: 10px;
`;
export default Projects;
