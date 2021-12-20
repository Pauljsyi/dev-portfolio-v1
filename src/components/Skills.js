import React from "react";
import anime from "animejs";

import AnimateSkill from "./helpers/AnimateSkill";

const Skills = () => {
  // let tl = anime.timeline({
  //   duration: 4000,
  //   easing: "easeInOutQuart",
  // });

  // tl.add({
  //   targets: "path",

  //   duration: 3000,
  // });

  // // translate(-715.39 -255.81)

  // tl.add({
  //   targets: ["path", "feTurbulence", "feDisplacementMap"],
  //   baseFrequency: 1,
  //   numOctaves: 2,
  //   scale: 1,
  // });
  return (
    <div className="s-container">
      <h2>.my skills</h2>
      <div id="skills-flex">
        <div className="morph-container">
          <div className="skills-cat-container">
            <h3>HTML</h3>
            <h3>Javascript</h3>
            <h3>MongoDB</h3>
            <h3>React</h3>
            <h3>Node.js</h3>
            <h3>CSS/SCSS</h3>
          </div>
          <svg
            className="layer1"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 347.41 401.15"
          >
            {/* <defs>
            <radialGradient
              id="radial-gradient"
              cx="888.49"
              cy="623.5"
              r="187.08"
              gradientTransform="matrix(1, 0, 0, -1, -714.79, 824.08)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.7" stop-color="#8891ff" />
              <stop offset="1" />
            </radialGradient>

            <radialGradient
              id="radial-gradient-2"
              cx="890.8"
              cy="624.53"
              r="140.31"
              gradientTransform="matrix(1, 0, 0, -1, -714.79, 824.08)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.62" stop-color="#80f" />
              <stop offset="1" />
            </radialGradient>

            <radialGradient
              id="radial-gradient-3"
              cx="891"
              cy="625"
              r="93.54"
              // xlink:href="#radial-gradient-2"
            />

            <radialGradient
              id="radial-gradient-4"
              cx="891"
              cy="624"
              r="46.77"
              gradientTransform="matrix(1, 0, 0, -1, -714.79, 824.08)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#80f" />
              <stop offset="1" />
            </radialGradient>
          </defs> */}
            <polygon
              className="cls-1"
              points="0.5 100.58 0.5 300.58 173.71 400.58 346.91 300.58 346.91 100.58 173.71 0.58 0.5 100.58"
            />
            <polygon
              className="cls-2"
              points="305.91 274.55 305.91 124.55 176 49.55 46.1 124.55 46.1 274.55 176 349.55 305.91 274.55"
            />
            <polygon
              className="cls-3"
              points="89.61 149.08 89.61 249.08 176.21 299.08 262.81 249.08 262.81 149.08 176.21 99.08 89.61 149.08"
            />
            <polygon
              className="cls-4"
              points="219.51 225.08 219.51 175.08 176.21 150.08 132.91 175.08 132.91 225.08 176.21 250.08 219.51 225.08"
            />
            {/* <filter id="displacementFilter">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.02"
              numOctaves="4"
              result="turbulence"
            />
            <feDisplacementMap
              in2="turbulence"
              in="SourceGraphic"
              scale="100"
              xChanelSelector="R"
              yChanelSelector="G"
            />
          </filter> */}
            <path
              // style={{
              //   filter: "url(#displacementFilter)",
              // }}
              className="skill-expand"
              id="fill"
              d="M888.5,256.5m0,0,0,0,0,0-127.61,124v150L890.8,616,989,506l31.7-125.53Z"
              transform="translate(-715.39 -255.81)"
            />
          </svg>
        </div>

        <div className="skills-container">
          <div className="skills">
            <ul>
              <h4>Frontend</h4>
              <li>HTML</li>
              <li>CSS</li>
              <li>Reactjs</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="skills">
            <ul>
              <h4>Backend</h4>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Mongoose.js</li>
            </ul>
          </div>
          <div className="skills">
            <ul>
              <h4>Tools</h4>
              <li>Git</li>
              <li>VS Code</li>
              <li>Webpack</li>
              <li>Adobe Creative Cloud</li>
            </ul>
          </div>
          <div className="skills">
            <ul>
              <h4>__</h4>
              <li>JavaScript</li>
              <li>NGINX</li>
              <li>Amazon EC2</li>
              <li>Amazon S3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
