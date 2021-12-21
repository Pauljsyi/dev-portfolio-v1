import React from "react";
import TroyGuitar from "../assets/about-img/troy-guitar.png";

const About = () => {
  return (
    <article className="container" id="about">
      <div id="about-container">
        <div id="about-img-container">
          <img
            className="about-img"
            src={TroyGuitar}
            alt="Paul playing guitar with Troy"
          />
        </div>
        <div id="about-text">
          <div>
            <h1>.about me :</h1>
            <p>Hi, I'm Paul.</p>
          </div>
          <div>
            <p>
              I'm a full-stack Software Engineer based out of Los Angeles, CA.
              <br />
              <br />I believe a web product should look nice and easy to use. As
              a developer, I believe that it is my job to build a product that
              is attractive, functional, and reliable.
              <br />
              <br />
              With 15 years of experience as a musician along with my skills as
              a developer, I am dedicated to offer pleasing results both on
              stage and on the screen. I am creative and passionate about
              coding, looking for a new adventure in the tech industry.
              <br />
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default About;
