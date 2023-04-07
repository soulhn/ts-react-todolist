import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #959da6;
  padding: 1rem;
`;

const NavItems = styled.ul`
  display: flex;
  list-style-type: none;
`;

const NavItem = styled.li`
  margin-left: 1rem;
`;

const NavLink = styled(Link)`
  color: #2f3033;
  text-decoration: none;
  &:hover {
    color: #ccc;
  }
`;

function Nav() {
  return (
    <Navbar>
      <NavItems>
        <NavItem>
          <NavLink to="/">TODO LIST</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/test2">CALENDAR</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/test3">MBTI TEST</NavLink>
        </NavItem>
      </NavItems>
    </Navbar>
  );
}

export default Nav;
