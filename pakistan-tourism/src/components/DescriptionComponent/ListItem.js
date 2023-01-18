import React from "react";

export const ListItem = (props) => {
  return (
    <div>
      <h3> {props.heading} </h3>
      <p> {props.description}</p>
      <br />
    </div>
  );
};
