import anime from "animejs";
import React from "react";

const Animation = () => {
  document.addEventListener("DOMContentLoaded", () => {
    //#greetings

    let link = document.querySelector(".greetings");

    link.addEventListener("mouseover", () => {
      // console.log("click");
      let letter = link.querySelectorAll(".letter");
      anime
        .timeline({
          targets: letter,
          easing: "easeInExpo",
          delay: (el, i) => 30 * i,
        })
        .add({
          // translateX: [0, -30],
          opacity: [1, 0],
          duration: 500,
          easing: "easeInExpo",
        })
        .add({
          // translateX: [40, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
        });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    //#greetings

    let link = document.querySelector(".intro");

    link.addEventListener("mouseover", () => {
      // console.log("click");
      let letter = link.querySelectorAll("#special");
      anime
        .timeline({
          targets: letter,
          easing: "easeInExpo",
          delay: (el, i) => 30 * i,
        })
        .add({
          translateX: [0, -30],
          opacity: [1, 0],
          duration: 500,
          easing: "easeInExpo",
        })
        .add({
          translateX: [40, 0],
          opacity: [0, 1],
          easing: "easeOutExpo",
        });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    let skill = document.querySelector(".layer1");

    skill.addEventListener("mouseover", () => {
      // console.log("click");
      let fill = skill.querySelectorAll(".skill-fill");
      anime({
        targets: [".skill-fill", "feTurbulence", "feDisplacementMap"],
        points: "64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96",
        baseFrequency: 0,
        scale: 1,
        loop: true,
        direction: "alternate",
        easing: "easeInOutExpo",
      });
    });
  });
};

export default Animation;
