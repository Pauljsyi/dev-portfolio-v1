import React from "react";
import anime from "animejs";

const AnimateSkill = () => {
  document.querySelector(".intro").addEventListener("mouseover", () => {
    let tl = anime.timeline({
      duration: 4000,
      easing: "easeInOutQuart",
    });

    // tl.add({
    //   targets: "path",
    //   keyframes: [
    //     { scale: 0.3, rotate: "0deg" },
    //     { scale: 0.2, rotate: "360deg" },
    //   ],
    //   duration: 3000,
    // });

    tl.add({
      targets: ["path", "feTurbulence", "feDisplacementMap"],
      baseFrequency: 0,
      numOctaves: 0,
      scale: 1,
    });
  });
  return <div></div>;
};

export default AnimateSkill;
