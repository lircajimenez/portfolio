import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <Container isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <Menu>
          <SidebarLink to="projects" onClick={toggle}>
            PROJECTS
          </SidebarLink>
          <SidebarLink to="skills" onClick={toggle}>
            SKILLS
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            CONTACT
          </SidebarLink>
        </Menu>
      </SidebarWrapper>
    </Container>
  );
};

const Container = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: green;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100")};
`;

const CloseIcon = styled(IoClose)`
  color: #fff;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: #fff;
`;

const Menu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;

const SidebarLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  transition: 0ms.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: blue;
    transition: 0ms.2s ease-in-out;
  }
`;

export default Sidebar;
