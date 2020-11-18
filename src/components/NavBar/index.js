import React from "react";
import { Nav, NavLink, Bars, NavIcon } from "./NavbarElements";

function Navbar() {
  return (
    <Nav>
      <NavLink to="/">Popcorn</NavLink>
      <NavIcon>
        <p>Menu</p>
        <Bars />
      </NavIcon>
    </Nav>
  );
}

export default Navbar;
