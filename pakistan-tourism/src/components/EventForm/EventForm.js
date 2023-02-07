import * as React from "react";
import { useState, useEffect } from "react";
import { EventListItem } from "./EventListItem";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import classes from "./Event.module.css";
export const EventForm = () => {
  const [events, setEvents] = useState();
  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    const response = await fetch(`http://localhost:4000/api/v1/events`);
    const events = await response.json();
    setEvents(events);
  };

  if (!events) return null;
  return (
    <div className={classes.wrapper}>
      <h2> fill out the following details</h2>
      <form>
        <div className={classes.title}>
          {/* <label>Title : </label>
          <input type='text' /> */}
          <TextField
            label='Size'
            id='outlined-size-small'
            defaultValue='Small'
            size='small'
          />
        </div>

        <div className={classes.address}>
          <label>Address : </label>
          <input type='text' />
        </div>
        <div className={classes.location}>
          <div className={classes.location_inside}>
            <label>City : </label>
            <input type='text' />
          </div>
          <div className={classes.location_inside}>
            <label>Country : </label>
            <input type='text' />
          </div>
        </div>
        <div>
          <div className={classes.title}>
            {" "}
            <label>Category : </label>
            <input type='text' />
          </div>
          <div className={classes.title}>
            <label>External Link : </label>
            <input type='text' />
          </div>
        </div>
        <div className={classes.title}>
          <div>
            <label>Event Date&Time :</label>
            <input type='date' />
          </div>
          <div>
            <label>CreatedAt :</label>
            <input type='date' />
          </div>
        </div>

        <div>
          <div className={classes.title}>
            {" "}
            <label>Organised By :</label>
            <input type='text' />
          </div>
          <div className={classes.title}>
            <label>Contact Number :</label>
            <input type='number' />
          </div>
        </div>
        <div className={classes.description}>
          <div className={classes.title}>
            <label>Long Description : </label>
            <textarea>please write long Description...</textarea>
          </div>
          <div className={classes.title}>
            <label>Short Description :</label>
            <textarea>please write short Description</textarea>
          </div>
        </div>

        <div className={classes.title}>
          <div>
            <label>latitude : </label>
            <input type='number' />{" "}
          </div>

          <div>
            <label>longitude : </label>
            <input type='number' />{" "}
          </div>
        </div>
        <div className={classes.Socialmedia}>
          <div className={classes.title}>
            {" "}
            <label>Instagram :</label>
            <input type='text' />
          </div>
          <div className={classes.title}>
            <label>Facebook :</label>
            <input type='text' />
          </div>
          <div className={classes.title}>
            <label>Youtube :</label>
            <input type='text' />
          </div>
        </div>
        <button>Submit Now</button>
      </form>
    </div>
  );
};
