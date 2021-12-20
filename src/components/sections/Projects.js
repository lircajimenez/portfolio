import { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../GlobalStyles";

import wandergram1 from "../../assets/projects/map.mov";
import wandergram2 from "../../assets/projects/sign-in.mov";
import wandergram3 from "../../assets/projects/upload-demo.mov";
import sm1 from "../../assets/projects/e-commerce1.png";
import sm2 from "../../assets/projects/e-commerce2.png";
import sm3 from "../../assets/projects/e-commerce3.png";
import sm4 from "../../assets/projects/e-commerce4.png";
import sm5 from "../../assets/projects/e-commerce5.png";
import sm6 from "../../assets/projects/e-commerce6.png";
import sm7 from "../../assets/projects/e-commerce7.png";
import sm8 from "../../assets/projects/e-commerce8.png";

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Wrapper id={"projects"}>
      <h2>Projects</h2>
      <Project>
        <Description>
          <Title>
            <h3>Wandergram</h3>
            {isExpanded ? (
              <button onClick={() => setIsExpanded(false)}>Hide details</button>
            ) : (
              <button onClick={() => setIsExpanded(true)}>View details</button>
            )}
          </Title>
          {isExpanded ? (
            <Details>
              <p>
                Wandergram is a web app that allows the user to explore a city
                through beautiful photographs and explore the location of some
                of them in a map. User needs to create an account in order to
                upload images.
              </p>
              <p>
                <b>Technologies:</b> React.js, Node.js, Express, MongoDB, CSS,
                Styled Components, Cloudinary, GoogleMaps API.
              </p>
              <p>
                <b>Demo:</b> https://youtu.be/laiCjnJ4rPg
              </p>
            </Details>
          ) : null}
        </Description>
        <Gallery>
          <Video src={wandergram1} autoPlay="true" muted loop />
          <Video src={wandergram2} autoPlay="true" muted loop />
          <Video src={wandergram3} autoPlay="true" muted loop />
        </Gallery>
      </Project>

      <Project>
        <Description>
          <Title>
            <h3>Smart Health</h3>
            {isExpanded ? (
              <button onClick={() => setIsExpanded(false)}>Hide details</button>
            ) : (
              <button onClick={() => setIsExpanded(true)}>View details</button>
            )}
          </Title>
          {isExpanded ? (
            <Details>
              <p>Smart Health is an e-commerce group project.</p>
              <p>
                <b>Technologies:</b> React.js, Node.js, Express, MongoDB, CSS,
                Styled Components, Redux, GoogleMaps API.
              </p>
              <p>
                <b>Demo:</b> https://youtu.be/laiCjnJ4rPg
              </p>
            </Details>
          ) : null}
        </Description>
        <Gallery>
          <Image src={sm1} alt="landing page" />
          <Image src={sm2} alt="home page" />
          <Image src={sm3} alt="products being filtered" />
          <Image src={sm4} alt="item page" />
          <Image src={sm5} alt="demo of search bar" />
          <Image src={sm6} alt="item page with cart open" />
          <Image src={sm7} alt="order summary modal" />
          <Image src={sm8} alt="confirmation modal" />
        </Gallery>
      </Project>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: #1f2020; */
  background: #111111;
  /* border: 3px violet solid; */

  h2 {
    font-size: 3rem;
    letter-spacing: 0.25rem;
    color: ${COLORS.pink};
    text-shadow: -3px 4px #111111, -5px 5.5px ${COLORS.yellow};
  }
`;
const Project = styled.section`
  display: flex;
  flex-direction: column;
  margin: 40px 20px;
  /* border: 2px green solid; */
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  display: flex;
  /* border: 2px red solid; */
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
  padding: 20px;
  /* width: calc(100% - 40px); */
  overflow-x: scroll;
  margin-top: 25px;
  border: 4px solid ${COLORS.green};
`;
const Video = styled.video`
  height: 500px;
  margin: 10px;
`;
const Image = styled.img`
  height: 500px;
  margin: 10px;
`;
export default Projects;
