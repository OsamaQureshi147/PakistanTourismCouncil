import classes from "./FamousPlace.module.css";
import React from "react";
export function PlacesCard(props) {
  return (
    <div className={classes.items}>
      <div className={classes.imgWrap}>
        <img src={props.pic} alt='images' />
      </div>
      <h3>{props.name}</h3>
      <span className={classes.card_desc}>{props.description}</span>
    </div>
  );
}
