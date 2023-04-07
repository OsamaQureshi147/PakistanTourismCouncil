import { React, useRef } from "react";

import classes from "./FamousPlace.module.css";
import { PlacesTab } from "./PlacesTab";
export const FamousPlaces = () => {
  const elementRef = useRef();
 
  return (
    <div className={classes.places}>
      <h2>our places</h2>
      <PlacesTab />
    </div>
  );
};
