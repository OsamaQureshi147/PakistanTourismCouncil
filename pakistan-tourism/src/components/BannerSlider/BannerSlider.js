import React from "react";
import Slider from "react-slick";
import { Banner } from "../Banner/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const BannerSlider = () => {
  let settings = {
    dots: false, 
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, 
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="slider-wrapper" style={{overflow: "hidden", marginTop:"68px"}}>
      <Slider {...settings}>
        <div>
          <Banner />
        </div>
        <div>
          <Banner />
        </div>
      </Slider>
    </div>
  );
};
