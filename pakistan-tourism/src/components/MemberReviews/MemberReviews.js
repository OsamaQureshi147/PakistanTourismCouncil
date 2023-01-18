import React from "react";
import classes from "./Reviews.module.css";
import { MembersReviewCard } from "./MembersReviewCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export const MemberReviews = () => {
  let settings = {
    dots: true,
    slidesToShow: 1,
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

      <div className={classes.reviewWrapper}>
        <div>
          <MembersReviewCard></MembersReviewCard>
        </div>
        <div>
          <MembersReviewCard></MembersReviewCard>
        </div>
      </div>

      <div className={classes.commit}>
        <Slider {...settings}>
          <div>
            <MembersReviewCard></MembersReviewCard>
          </div>
          <div>
            <MembersReviewCard></MembersReviewCard>
          </div>
        </Slider>
      </div>

      <div>
        <Slider {...settings}>
          <div>
            <MembersReviewCard></MembersReviewCard>
          </div>
          <div>
            <MembersReviewCard></MembersReviewCard>
          </div>
        </Slider>
      </div>
    </div>
  );
};
