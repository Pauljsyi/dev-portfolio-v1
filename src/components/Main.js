import React, { useState } from "react";
import Animation from "./helpers/Animation";

const Main = () => {
  Animation();

  const [delay, setDelay] = useState();

  const linkdelay = (e) => {
    e.preventDefault();
    setTimeout(() => {
      console.log("2 sec link delay success!");
      window.location.href = "/#about";
    }, 1300);
  };

  return (
    <main>
      <div className="objective">
        <div className="circle"></div>
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
              href="#about"
              onClick={linkdelay}
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
            <a href="#featured">
              <div className="letter">w</div>
              <div className="letter">e</div>
              <div className="letter">b</div>
              <div className="space"> </div>
              <div className="letter">d</div>
              <div className="letter">e</div>
              <div className="letter">v</div>
              <div className="letter">e</div>
              <div className="letter">l</div>
              <div className="letter">o</div>
              <div className="letter">p</div>
              <div className="letter">e</div>
              <div className="letter">r</div>
              <div className="letter">.</div>
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
