import React from "react";
import paradigmguitar from "../assets/guitarpick-logo-white-transparent.png";

const Projects = () => {
  return (
    <div className="project-container">
      <div className="first-project-container">
        <p>PARADIGM GUITAR ECOMMERCE WEBSITE .nov.20.2021</p>
        <img src={paradigmguitar} alt="" />
      </div>
      <div className="second-project-container">
        <p>this is my second project</p>
      </div>
      <div className="third-project-container">
        <p>this is my third project</p>
      </div>
    </div>
  );
};

export default Projects;
