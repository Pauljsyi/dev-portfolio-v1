import React from "react";
// import PropTypes from "prop-types";

// import Picklogo from "../assets/pick-white-transparent.png";
// import Picklogo from "../assets/JSlogo.png";
import py from "../assets/paullogoblack.png";
// import py from "../assets/paul-yi-logo-roundedwhite.png";
import js from "../assets/paul-yi-logo-js-white.png";

// import Picklogo from "../assets/JSlogo2.png";
// import Picklogo from "../assets/JSlogo-white.png";
// import { Link } from "react-router-dom";
// import Picklogo from "../assets/saveforweb-pick.png";
import { Github, Linkedin, Facebook, Instagram } from "react-bootstrap-icons";
import Logos from "./helpers/Logos";

const Header = () => {
  Logos();
  return (
    <nav>
      <div className="nav-container">
        <div className="logo1">
          <img className="logo-img1" id="img1" src={py} alt="logo" />
          <img className="logo-img2" id="img2" src={js} alt="logo" />
        </div>

        <div className="link-container">
          <li className="navlinks">
            <a className="links" href="#section-container">
              .projects
              <hr />
            </a>

            {/* <a className="links" href="/#">
              .work
            </a> */}
            <a className="links" href="#about">
              .about
              <hr />
            </a>
          </li>
          <li className="social-nav">
            <a className="nav-icons" href="https://www.github.com/pauljsyi">
              <Github color="black" font-size="30px" />
            </a>
            <a
              className="nav-icons"
              href="https://www.linkedin.com/in/pauljsyi"
            >
              <Linkedin color="black" font-size="30px" />
            </a>
            <a className="nav-icons" href="https://www.facebook.com/pauljsyi">
              <Facebook color="black" font-size="30px" />
            </a>
            <a className="nav-icons" href="https://www.instagram.com/mrpaulyi">
              <Instagram color="black" font-size="30px" />
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Header;
