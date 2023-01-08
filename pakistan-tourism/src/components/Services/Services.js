import React from "react";

import classes from "./Services.module.css";

import pic1 from "../../assests/images/s1.png";
export const Services = () => {
  return (
    <div className={classes.Service_background}>
      <div className={classes.overlay}></div>
      <div className={classes.textWrapper}>
        <h2>Become our member</h2>
        <p>Who are always with tight Budget</p>
      </div>
      <div className={classes.ammenties}>
        <div className={classes.inside_ammenties}>
          <img src={pic1} alt='image1' />
          <h3>Hounary</h3>
          <p> 
            Institutes / Ambassador
          </p>
        </div>

        <div className={classes.inside_ammenties}>
          <img src={pic1} alt='image2' />
          <h3>Co-operate</h3>
          <p>For Business Persons/ Organizations
          </p>
        </div>

        <div className={classes.inside_ammenties}>
          <img src={pic1} alt='image3' />
          <h3>Individual</h3>
          <p> Students/Paid/
          </p>
        </div>
      </div>
    </div>
  );
};
