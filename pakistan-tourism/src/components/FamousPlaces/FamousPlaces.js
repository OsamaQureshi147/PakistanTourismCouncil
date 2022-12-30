import React from "react";

import classes from "./FamousPlace.module.css";
import Places_tab from "./Places_tab";
export const FamousPlaces = () => {
  return (
    <div className={classes.places}>
      <h2>You'll fall in love with Paksitan</h2>
      <p>Explore Pakistan from Gilgit to Karachi</p>
      <Places_tab></Places_tab>
    </div>
  );
};
