import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import slide1 from "../assets/images/slides/1.jpeg";
import slide2 from "../assets/images/slides/2.jpeg";
import slide3 from "../assets/images/slides/3.jpeg";
import slide4 from "../assets/images/slides/4.jpeg";
import slide5 from "../assets/images/slides/5.jpeg";
import slide6 from "../assets/images/slides/6.jpeg";
import slide7 from "../assets/images/slides/7.jpeg";
import slide8 from "../assets/images/slides/8.jpeg";
import slide9 from "../assets/images/slides/9.jpeg";
import slide10 from "../assets/images/slides/10.jpeg";

function CarouselComponent() {
  return (
    <div style={{ width: "50%", margin: "auto", padding: "50px" }}>
      <Carousel arrows infinite alt="slide">
        <img alt="slide" src={slide1} />
        <img alt="slide" src={slide2} />
        <img alt="slide" src={slide3} />
        <img alt="slide" src={slide4} />
        <img alt="slide" src={slide5} />
        <img alt="slide" src={slide6} />
        <img alt="slide" src={slide7} />
        <img alt="slide" src={slide8} />
        <img alt="slide" src={slide9} />
        <img alt="slide" src={slide10} />
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
