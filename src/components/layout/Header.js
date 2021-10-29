import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Nav>
        <ul>
          <li>
            <NavLink to="#projects">PROJECTS</NavLink>
          </li>
          <li>
            <NavLink to="#about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="#contact">CONTACT</NavLink>
          </li>
        </ul>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 6vh;
  background: #272829;
  position: fixed;
  display: flex;
`;

const Nav = styled.nav`
  display: flex;
  /* justify-content: space-between; */

  ul {
    display: flex;
    justify-content: space-between;
  }
`;

export default Header;
