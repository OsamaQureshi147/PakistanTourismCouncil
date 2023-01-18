import { React, useRef } from "react";

import classes from "./FamousPlace.module.css";
import { PlacesTab } from "./PlacesTab";
export const FamousPlaces = () => {
  const elementRef = useRef();
 
  return (
    <div className={classes.places}>
      <h2>You'll fall in love with Pakistan</h2>
      <p ref={elementRef}>Explore Pakistan from Gilgit to Karachi</p>
      <PlacesTab />
    </div>
  );
};
