import React from "react";
import NavBar from "../../Navigation/NavBar";
import './Header.scss'

const Header = () => {
  return (
    <>
      <header className="header-main">
        <img src="../../../Assets/SVG/hotel-overlook-logo.svg" alt="overlookLogo" />
        <NavBar />
      </header>
    </>
  );
};

export default Header;
