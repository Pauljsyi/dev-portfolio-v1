import React from "react";
import Picklogo from "../assets/guitarpick-logo-white-transparent.png";

const Header = () => {
  return (
    <nav>
      <img className="logo-img" src={Picklogo} alt="logo" />
      <li className="navlinks">
        <a href="/#">Projects</a>
        <a href="/#">Work</a>
        <a href="/#">About</a>
      </li>
    </nav>
  );
};

export default Header;
