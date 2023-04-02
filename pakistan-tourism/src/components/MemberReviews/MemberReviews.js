import React, { useEffect, useState } from "react";
import classes from "./Reviews.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import osama from "../../assests/images/osama.jpg";
let settings = {
  dots: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 4000,
};

export const MemberReviews = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    const response = await fetch(`http://localhost:4000/api/v1/users`);
    const users = await response.json();
    setUsers(users);
  };

  if (!users) return null;
  return (
    <div className={classes.main}>
      <div className={classes.textWrapper}>
        <h2>How our Sponsors felt about us</h2>
        <p>who are in extreme love with family and inviting people</p>
      </div>
      <div className={classes.sliderWrapper}>
        <Slider {...settings}>
          {users.map((user) => (
            <div className={classes.review_card}>
              <img src={osama} alt='Review' />
              <h3>{user.name}</h3>
              <p>{user.bio}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
