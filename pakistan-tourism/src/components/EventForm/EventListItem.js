import React from "react";
import classes from "./Event.module.css";
export const EventListItem = (props) => {
  return (
    <div className={classes.list}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.country}>{props.country}</div>
      <div className={classes.time}>{props.time}</div>
      <div className={classes.edit}>Edit</div>
      <div className={classes.delete}>Delete</div>
    </div>
  );
};
