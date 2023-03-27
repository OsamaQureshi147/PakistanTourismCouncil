import React from "react";

import classes from "./Members.module.css";

import { Link } from "react-router-dom";

import honor from "../../assests/icons/honor.png";
import coperative from "../../assests/icons/coperative.png";
import Individual from "../../assests/icons/individual.png";

export const Members = () => {
  return (
    <div className={classes.row}>
      <div className={classes.row1}>
        <div className={classes.textWrapper}>
          <h2>Become our Member</h2>
        </div>

        <div className={classes.rowmember}>
          <div className={classes.inside_ammenties}>
            <Link to='/SignUp' state={{ data: "individual" }}>
              <img src={Individual} alt='image3' />
              <h3>Individual</h3>
              <p> Students / Paid / Contributors</p>
            </Link>
          </div>

          <div className={classes.inside_ammenties}>
            <Link to='/SignUp' state={{ data: "corporate" }}>
              <img src={coperative} alt='image2' />
              <h3>corporate</h3>
              <p>For Business Persons / Organizations</p>
            </Link>
          </div>
        </div>
        <div className={classes.rowmember2}>
          <div className={classes.inside_ammenties}>
            <Link to='/SignUp' state={{ data: "honorary" }}>
              <img src={honor} alt='image1' />
              <h3>Honorary</h3>
              <p>Institutes / Ambassador</p>
            </Link>
          </div>
        </div>
      </div>

      <div className={classes.row2}>hi</div>
    </div>
  );
};
