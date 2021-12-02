import React from "react";
import paradigmguitar from "../assets/guitarpick-logo-white-transparent.png";

const Projects = () => {
  return (
    <section>
      <h1>.featured projects.</h1>
      <div className="project-container">
        <div className="first-project-container">
          <p>PARADIGM GUITAR ECOMMERCE WEBSITE .nov.20.2021</p>
          <a href="#/paradigmguitar">
            <img src={paradigmguitar} alt="" />
          </a>
        </div>
        <div className="second-project-container">
          <a href="#/paradigmguitar">
            <img src={paradigmguitar} alt="" />
          </a>
          <p>this is my second project</p>
        </div>
        <div className="third-project-container">
          <p>this is my third project</p>
          <a href="#/paradigmguitar">
            <img src={paradigmguitar} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
