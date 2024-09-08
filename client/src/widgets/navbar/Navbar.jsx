import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Main</NavLink>
        </li>
        <li>
          <NavLink to="/universes">Universes</NavLink>
        </li>
        <li>
          <NavLink to="/characters">Characters</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
