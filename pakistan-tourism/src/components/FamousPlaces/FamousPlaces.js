import React from "react";

import classes from "./FamousPlace.module.css";
import { PlacesTab } from "./PlacesTab";
export const FamousPlaces = () => {
  return (
    <div className={classes.places}>
      <h2>You'll fall in love with Paksitan</h2>
      <p>Explore Pakistan from Gilgit to Karachi</p>
      <PlacesTab />
    </div>
  );
};
