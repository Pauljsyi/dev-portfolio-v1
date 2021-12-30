import React, { useState } from "react";
import { ParadigmData } from "./ParadigmData";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // console.log(current);

  return (
    <section className="carousel">
      {ParadigmData.map((item, index) => {
        return (
          <div
            className={index === current ? "active-slide" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                className="project-img"
                src={item.image}
                alt="paradigm guitars"
              />
            )}
          </div>
        );
      })}
      <div className="arr-container">
        <IoIosArrowDropleft className="left-arrow" onClick={prevSlide} />
        <IoIosArrowDropright className="right-arrow" onClick={nextSlide} />
      </div>
    </section>
  );
};

export default Carousel;
