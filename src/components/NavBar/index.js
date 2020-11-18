import React from "react";
import { Nav, NavLink, Bars, NavIcon } from "./NavbarElements";

function Navbar({ toggle }) {
  return (
    <Nav>
      <NavLink to="/">Popcorn</NavLink>
      <NavIcon onClick={toggle}>
        <p>Menu</p>
        <Bars />
      </NavIcon>
    </Nav>
  );
}

export default Navbar;
