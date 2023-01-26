import React from "react";
import classes from "./Reviews.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import danish from "../../assests/images/danish.jpg";
import osama from "../../assests/images/osama.jpg";
import moon from "../../assests/images/moon.jpeg";

export const MemberReviews = () => {
  let settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className={classes.main}>
      <div className={classes.textWrapper}>
        <h2>How our Members felt about us</h2>
        <p>who are in extreme love with family and inviting people</p>
      </div>

      <div className={classes.sliderWrapper}>
        <Slider {...settings}>
          <div className={classes.card}>
            <img src={osama} alt='danish' />
            <h4>Osama Ehsan</h4>
            <span>Engineer</span>
          </div>
          <div className={classes.card}>
            <img src={danish} alt='danish' />
            <h4>Danish Yahya</h4>
            <span>Engineer</span>
          </div>
          <div className={classes.card}>
            <img src={moon} alt='danish' />
            <h4>Moon Siknadar</h4>
            <span>Engineer</span>
          </div>
          <div className={classes.card}>
            <img src={moon} alt='danish' />
            <h4>Moon Sikandar</h4>
            <span>Engineer</span>
          </div>
        </Slider>
      </div>
    </div>
  );
};
