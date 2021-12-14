import React from "react";
import anime from "animejs";

import Active from "../../assets/paul-yi-logo-roundedwhite.png";
import Inactive from "../../assets/paul-yi-logo-js-white.png";

const Logos = () => {
  document.addEventListener("DOMContentLoaded", () => {
    let logo = document.querySelector(".logo1");

    logo.addEventListener("mouseover", () => {
      // console.log("click");
      let logoimg = logo.querySelectorAll(".logo-img1");
      anime
        .timeline({
          targets: ".logo-img1",
          // easing: "easeInExpo",
          delay: (el, i) => 30 * i,
        })
        .add({
          rotate: ".25turn",
          opacity: [0, 0],
          duration: 2000,
          // easing: "easeInExpo",
        })
        .add({
          rotate: "0turn",
          opacity: [0, 1],
          duration: 2000,
          // easing: "easeOutExpo",
        });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    let logo = document.querySelector(".logo1");

    logo.addEventListener("mouseover", () => {
      // console.log("click");
      let logoimg = logo.querySelectorAll(".logo-img2");
      anime
        .timeline({
          targets: ".logo-img2",
          // easing: "easeInExpo",
          delay: (el, i) => 30 * i,
        })
        .add({
          opacity: [1, 1],
          rotate: ".25turn",
          duration: 2000,
          // easing: "easeInExpo",
        })
        .add({
          rotate: "0turn",
          opacity: [1, 0],
          duration: 2000,
          // easing: "easeOutExpo",
        });
    });
  });

  return <div></div>;
};

export default Logos;
