import React from "react";
// import Picklogo from "../assets/pick-white-transparent.png";
// import Picklogo from "../assets/JSlogo.png";
import Picklogo from "../assets/PYlogo.png";
// import Picklogo from "../assets/JSlogo2.png";
// import Picklogo from "../assets/JSlogo-white.png";
// import { Link } from "react-router-dom";
// import Picklogo from "../assets/saveforweb-pick.png";
import { Github, Linkedin, Facebook, Instagram } from "react-bootstrap-icons";

const Header = () => {
  return (
    <nav>
      <div className="nav-container">
        <a href="/">
          <img className="logo-img" src={Picklogo} alt="logo" />
        </a>

        <div className="link-container">
          <li className="navlinks">
            <a className="links" href="/#">
              .projects
              <hr />
            </a>

            {/* <a className="links" href="/#">
              .work
            </a> */}
            <a className="links" href="/#">
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
