import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "../App.css";
import Slider from "react-slick";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext
// } from "pure-react-carousel";

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

const dataslide = [
  {
    id: "1",
    title: "One",
    src: slide1
  },
  {
    id: "2",
    title: "Two",
    src: slide2
  },
  {
    id: "3",
    title: "Three",
    src: slide3
  },
  {
    id: "4",
    title: "Four",
    src: slide4
  },
  {
    id: "5",
    title: "Five",
    src: slide5
  },
  {
    id: "6",
    title: "Six",
    src: slide6
  }
];

function CarouselComponent() {
  let settings = {
    draggable: false,
    slideToShow: 2,
    autoplay: true,
    dots: true,
    lazyLoad: "ondemand",
    arrows: true
  };

  return (
    <ul className="smallslide">
      <Slider {...settings}>
        {dataslide.map((item, i) => {
          return (
            <li key={i}>
              <div className="left">
                <div className="item">
                  <img alt="slide" src={item.src} />
                </div>
              </div>
              <div className="right">
                <div className="item">
                  {" "}
                  <img alt="slide" src={item.src} />
                </div>
                <div className="item">
                  {" "}
                  <img alt="slide" src={item.src} />
                </div>
              </div>
            </li>
          );
        })}
      </Slider>
    </ul>
  );
}

export default CarouselComponent;
