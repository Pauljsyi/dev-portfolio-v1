import React from "react";
import anime from "animejs";

const Logos = () => {
  document.addEventListener("DOMContentLoaded", () => {
    let logo = document.querySelector(".logo1");

    logo.addEventListener("mouseover", () => {
      let logoimg = logo.querySelectorAll(".logo-img1");
      anime
        .timeline({
          targets: ".logo-img1",
          delay: (el, i) => 30 * i,
        })
        .add({
          rotate: ".25turn",
          opacity: [0, 0],
          duration: 2000,
        })
        .add({
          rotate: "0turn",
          opacity: [0, 1],
          duration: 2000,
        });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    let logo = document.querySelector(".logo1");

    logo.addEventListener("mouseover", () => {
      let logoimg = logo.querySelectorAll(".logo-img2");
      anime
        .timeline({
          targets: ".logo-img2",
          delay: (el, i) => 30 * i,
        })
        .add({
          opacity: [1, 1],
          rotate: ".25turn",
          duration: 2000,
        })
        .add({
          rotate: "0turn",
          opacity: [1, 0],
          duration: 2000,
        });
    });
  });

  return <div></div>;
};

export default Logos;
