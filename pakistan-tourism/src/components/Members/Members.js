import React from "react";

import classes from "./Members.module.css";

import { Link } from "react-router-dom";

import honor from "../../assests/icons/honor.png";
import coperative from "../../assests/icons/coperative.png";
import Individual from "../../assests/icons/individual.png";

const pages = [{ text: "SignUp", link: "/tourism" }];

export const Members = () => {
  return (
    <div className={classes.Service_background}>
      <div className={classes.overlay}></div>
      <div className={classes.textWrapper}>
        <h2>Become our member</h2>
        <p>Who are always with tight Budget</p>
      </div>
      <div className={classes.ammenties}>
        <div className={classes.inside_ammenties}>
          <Link to='/SignIn'>
            <img src={honor} alt='image1' />
            <h3>Honorary</h3>
            <p>Institutes / Ambassador</p>
          </Link>
        </div>

        <div className={classes.inside_ammenties}>
          <Link to='/SignUp'>
            <img src={coperative} alt='image2' />
            <h3>corporate</h3>
            <p>For Business Persons / Organizations</p>
          </Link>
        </div>

        <div className={classes.inside_ammenties}>
          <Link to='/SignUp'>
            <img src={Individual} alt='image3' />
            <h3>Individual</h3>
            <p> Students / Paid / Contributors</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
