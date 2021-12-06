import React from "react";
import PG from "../assets/Project-Img/Paradigm-Guitar/PG-landingpage.png";
import Carousel from "./helpers/Carousel";
import { ParadigmData } from "./helpers/ParadigmData";

const Projects = () => {
  return (
    <section>
      <h1 id="featured">.featured projects.</h1>
      <div className="project-container">
        <div className="first-project-container">
          <div className="project-description">
            <a href="#/www.paradigmguitar.com">
              <p>PARADIGM GUITAR</p>
            </a>

            <hr />
            <p>e-commerce website</p>
            <p>
              A website to promote the brandings of a local boutique guitar
              store.
            </p>
            <p>TECHNOLOGIES USED:</p>

            <p>
              MongoDB, Express.js, React.js, Node.js, <br /> Amazon S3, Amazon
              EC2, NGINX
            </p>
            <p>
              Using the MVC architecture, this website is deployed on Amazon's
              EC2 cloud server with NGINX as the web server.
            </p>
            <p>check it out !</p>
          </div>
          <div className="carousel-container">
            <Carousel slides={ParadigmData} />
          </div>

          {/* <img className="project-img" src={PG} alt="" /> */}
        </div>
        {/* <div className="second-project-container">
          <a href="#/paradigmguitar">
            <img src={PG} alt="" />
          </a>
          <p>this is my second project</p>
        </div> */}
        {/* <div className="third-project-container">
          <p>this is my third project</p>
          <a href="#/paradigmguitar">
            <img src={PG} alt="" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
