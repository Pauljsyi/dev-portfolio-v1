import React, { useState } from "react";
import Animation from "./helpers/Animation";
import { Github, Linkedin, Facebook, Instagram } from "react-bootstrap-icons";

const Main = () => {
  Animation();

  const [delay, setDelay] = useState();

  const linkdelay1 = (e) => {
    e.preventDefault();
    setTimeout(() => {
      // console.log("2 sec link delay success!");
      // window.location.href = "/#about";
    }, 1300);
  };

  const linkdelay2 = (e) => {
    e.preventDefault();
    setTimeout(() => {
      // console.log("2 sec link delay success!");
      // window.location.href = "/#featured";
    }, 1300);
  };

  return (
    <main>
      <li className="social-nav">
        <a className="nav-icons" href="https://www.github.com/pauljsyi">
          <Github color="white" font-size="40px" />
        </a>
        <a className="nav-icons" href="https://www.linkedin.com/in/pauljsyi">
          <Linkedin color="white" font-size="40px" />
        </a>
        <a className="nav-icons" href="https://www.facebook.com/pauljsyi">
          <Facebook color="white" font-size="40px" />
        </a>
        <a className="nav-icons" href="https://www.instagram.com/mrpaulyi">
          <Instagram color="white" font-size="40px" />
        </a>
      </li>
      <div className="objective">
        {/* <div className="circle"></div> */}
        <div className="intro-container">
          <div className="greetings" id="greetings">
            <div className="letter">.</div>
            <div className="letter">h</div>
            <div className="letter">e</div>
            <div className="letter">l</div>
            <div className="letter">l</div>
            <div className="letter">o</div>
            <div className="letter">.</div>
          </div>
          <div className="intro" id="intro">
            <div className="letter">i</div>
            <div className="space"> </div>
            <div className="letter">a</div>
            <div className="letter">m</div>
            <div className="space"> </div>

            <a
              className="special-characters"
              id="specialc"
              // href="#about"
              onClick={linkdelay1}
              // href="javascript:setTimeout(() => {window.location = '#about'}, 1000)"
            >
              <div className="letter" id="special">
                p
              </div>
              <div className="letter" id="special">
                a
              </div>
              <div className="letter" id="special">
                u
              </div>
              <div className="letter" id="special">
                l
              </div>
              <div className="letter" id="special">
                .
              </div>
            </a>
          </div>
          <div id="brief">
            <div className="letter">a</div>
            <div className="space"> </div>
            <div className="letter">f</div>
            <div className="letter">u</div>
            <div className="letter">l</div>
            <div className="letter">l</div>
            <div className="letter">-</div>
            <div className="letter">s</div>
            <div className="letter">t</div>
            <div className="letter">a</div>
            <div className="letter">c</div>
            <div className="letter">k</div>
            <div className="space"> </div>
            <a
              id="wdev"
              // href="#featured"
              onClick={linkdelay2}
            >
              <div className="letter" id="job-title">
                w
              </div>
              <div className="letter" id="job-title">
                e
              </div>
              <div className="letter" id="job-title">
                b
              </div>
              <div className="letter" id="job-title">
                -
              </div>
              <div className="letter" id="job-title">
                d
              </div>
              <div className="letter" id="job-title">
                e
              </div>
              <div className="letter" id="job-title">
                v
              </div>
              <div className="letter" id="job-title">
                e
              </div>
              <div className="letter" id="job-title">
                l
              </div>
              <div className="letter" id="job-title">
                o
              </div>
              <div className="letter" id="job-title">
                p
              </div>
              <div className="letter" id="job-title">
                e
              </div>
              <div className="letter" id="job-title">
                r
              </div>
              <div className="letter" id="job-title">
                .
              </div>
            </a>
          </div>
        </div>
      </div>
      <div id="down">
        <a href="#about">
          <span></span>
        </a>
      </div>
    </main>
  );
};

export default Main;
