import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.scss'

const NavBar = () => {
  return (
    <nav className="nav-main">
      <ul className="nav-links">
        <li>
          <NavLink to="/path" className="active-link">FORSIDE</NavLink>
        </li>
        <li>
          <NavLink to="/path" className="active-link">HOTELLER & DESTINATIONER</NavLink>
        </li>
        <li>
          <NavLink to="/path" className="active-link">VÆRELSER</NavLink>
        </li>
        <li>
          <NavLink to="/path" className="active-link">RESERVATION</NavLink>
        </li>
        <li>
          <NavLink to="/path" className="active-link">LOGIN</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
