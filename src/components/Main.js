import React from "react";

const Main = () => {
  return (
    <main>
      <div className="objective">
        <div className="circle"></div>
        <div className="intro-container">
          <p id="greetings">.hello.</p>
          <p id="intro">i am paul.</p>
          <p id="brief">.a full-stack web developer.</p>
        </div>
      </div>
      <div className="arrow-container">
        <div id="down">
          <a href="#featured">
            <span></span>
          </a>
        </div>
        {/* <a id="featured-link" href="#featured">
          <p>FEATURED</p>
        </a> */}
      </div>
    </main>
  );
};

export default Main;
