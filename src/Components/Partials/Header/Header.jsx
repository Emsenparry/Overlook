import React from "react";
import NavBar from "../../Navigation/NavBar";
import './Header.scss'
import { ReactComponent as OverlookLogo } from "../../../Assets/SVG/hotel-overlook-logo.svg";

const Header = () => {
  return (
    <>
      <header className="header-main">
        <OverlookLogo />
        <NavBar />
      </header>
    </>
  );
};

export default Header;
