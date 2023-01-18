import { React, useRef, useState } from "react";
import classes from "./Banner.module.css";
export const Banner = () => {
  const [count, setCount] = useState("");

  const handleClick = () => {
    alert("here");

    fetch("http://localhost:5000/").then((res) => {
      console.log("Response:" + JSON.stringify(res));
    });
    alert(count);

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
