import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
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
  color: white;
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
          <NavLink to="/">Test 1</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/test2">Test 2</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/test3">Test 3</NavLink>
        </NavItem>
      </NavItems>
    </Navbar>
  );
}

export default Nav;
