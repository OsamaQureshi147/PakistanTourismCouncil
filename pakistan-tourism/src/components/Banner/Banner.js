import { React, useRef } from "react";
import { Link } from "react-router-dom";
import * as ReactDOM from "react-dom";
import classes from "./Banner.module.css";
import FamousPlaces from "../FamousPlaces";
export const Banner = () => {
  const ref = useRef(null);

  const handleClick = () => {
    alert("here");

    // ref.current?.scrollIntoView({behavior: 'smooth'});
    // scollToRef.current.scrollIntoView()
  };

  return (
    <div className={classes.bannerWrapper}>
      <div className={classes.overlay}></div>
      <div className={classes.textWrapper}>
        <h5>Be the part of this Wonderful Journey</h5>
        <h1>Incredible Paksitan!</h1>
        {/* <Link to="www.google.com">Explore Now</Link> */}
        <button className={classes.explore} onClick={handleClick}>
          Explore Now
        </button>
      </div>
    </div>
  );
};
