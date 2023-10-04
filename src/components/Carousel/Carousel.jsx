import React, { useState, useEffect } from "react";
import ReactCarousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Bebida from "./Bebida";
import Tips from "./Tips";
import Musica from "./Musica";
import { Wrapper } from "../../style/Container";

export default function Carousel({ change, error, container }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#drinks") {
        setCurrentIndex(0);
      } else if (hash === "#music") {
        setCurrentIndex(2);
      } else {
        setCurrentIndex(1);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const slides = [
    <Bebida change={change} container={container} key="1" error={error} />,
    <Tips change={change} container={container} key="2" />,
    <Musica change={change} container={container} key="3" error={error} />,
  ];

  const handleChange = (value) => {
    if (!isNaN(value)) {
      setCurrentIndex(value);
    }
  };

  return (
    <>
      <ReactCarousel
        slides={slides}
        value={currentIndex}
        onChange={handleChange}
      />
      <Wrapper>
        <Dots
          value={currentIndex}
          onChange={handleChange}
          number={slides.length}
        />
      </Wrapper>
    </>
  );
}
