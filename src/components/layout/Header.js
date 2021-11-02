import React from "react";
// import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <ul>
          <li>
            <ScrollLink to="projects" smooth={true} duration={500}>
              PROJECTS
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about">ABOUT</ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact">CONTACT</ScrollLink>
          </li>
        </ul>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 6vh;
  padding: 10px 20px;
  background: #272829;
  position: fixed;
  display: flex;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  border: 2px solid red;

  ul {
    width: 50%;
    display: flex;
    justify-content: space-between;
    border: 1px solid yellow;
    color: #ffffff;
  }

  li {
    border: 1px solid green;
  }
`;

const ScrollLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
`;

export default Header;
