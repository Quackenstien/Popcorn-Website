import React from "react";
import { Nav, NavLink } from "./NavbarElements";
import { BrowserRouter as Router } from "react-router-dom";

function Navbar() {
  return (
    <Router>
      <Nav>
        <NavLink to="/">Popcorn</NavLink>
      </Nav>{" "}
    </Router>
  );
}

export default Navbar;
