import React from "react";
import classes from "./Reviews.module.css";
import pic1 from "../../assests/images/c1.png";
export const Reviews = () => {
  return (
    <div className={classes.main}>
      <div className={classes.textWrapper}>
        <h2>How our Members felt about us</h2>
        <p>who are in extreme love with family and inviting people</p>
      </div>
      <div className={classes.reviewWrapper}>
        <div className={classes.coment}>
          <img src={pic1} alt='images4' />
          <h4>Shahid</h4>
          <p>CEO Pakistan Toursim Concil</p>
        </div>

        <div className={classes.coment}>
          <img src={pic1} alt='images4' />
          <h4>Osama Ahsan</h4>
          <p>Managing Northen tours in pakistan</p>
        </div>

        <div className={classes.coment}>
          <img src={pic1} alt='images4' />
          <h4>fannie Rowe</h4>
          <p>
            it was a life Experiene to visit such a beatiful cultural Country
          </p>
        </div>

        <div className={classes.coment}>
          <img src={pic1} alt='images4' />
          <h4>fannie Rowe</h4>
          <p>
            it was a life Experiene to visit such a beatiful cultural Country
          </p>
        </div>
      </div>
    </div>
  );
};
