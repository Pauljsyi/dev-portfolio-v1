import React from "react";
import py from "../assets/paul-yi-logo-roundedwhite.png";
import js from "../assets/paul-yi-logo-js-white.png";
import { Link } from "react-router-dom";
import Logos from "./helpers/Logos";

const Header = () => {
  Logos();
  return (
    <nav>
      <div className="nav-container">
        <Link className="logo1" to="/">
          <img className="logo-img1" id="img1" src={py} alt="logo" />
          <img className="logo-img2" id="img2" src={js} alt="logo" />
        </Link>
        <div className="link-container">
          <li className="navlinks">
            <a className="links" href="#about">
              .about
            </a>
            <a className="links" href="#skill">
              .skills
            </a>
            <a className="links" href="#projects">
              .projects
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Header;
