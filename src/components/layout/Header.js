import React from "react";
import styled from "styled-components";
// import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";

const Header = ({ toggle }) => {
  return (
    <Wrapper>
      <Nav>
        <Icon onClick={toggle}>
          <FiMenu />
        </Icon>
        <NavMenu>
          {/* <NavItem> */}
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            PROJECTS
          </ScrollLink>
          {/* </NavItem> */}
          {/* <NavItem> */}
          <ScrollLink to="skills">SKILLS</ScrollLink>
          {/* </NavItem> */}
          {/* <NavItem> */}
          <ScrollLink to="contact">CONTACT</ScrollLink>
          {/* </NavItem> */}
        </NavMenu>
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 7vh;
  /* height: 80px; */
  padding: 10px 20px;
  background: #272829;
  position: fixed;
  display: flex;
  z-index: 20;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  z-index: 1;
  border: 1px solid yellow;

  /* ul {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid yellow;
    color: #ffffff;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  li {
    height: auto;
    border: 1px solid green;
  } */
`;

const NavMenu = styled.ul`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid yellow; */
  color: #ffffff;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// const NavItem = styled.li`
//   height: auto;
// `;

const ScrollLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #ffffff;
  text-decoration: none;
  border: 1px solid red;
  cursor: pointer;

  &:active {
    border-bottom: 3px solid orange;
  }
`;

const Icon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 40%);
    cursor: pointer;
    font-size: 1.8rem;
    color: #fff;
  }
`;

export default Header;
