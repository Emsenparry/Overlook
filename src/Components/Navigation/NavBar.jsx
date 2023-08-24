import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.scss'

const NavBar = () => {
  return (
    <nav className="nav-main">
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="active-link">FORSIDE</NavLink>
        </li>
        <li>
          <NavLink to="/destinations" className="active-link">HOTELLER & DESTINATIONER</NavLink>
        </li>
        <li>
          <NavLink to="/rooms" className="active-link">VÆRELSER</NavLink>
        </li>
        <li>
          <NavLink to="/reservations" className="active-link">RESERVATION</NavLink>
        </li>
        <li>
          <NavLink to="/login" className="active-link">LOGIN</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
