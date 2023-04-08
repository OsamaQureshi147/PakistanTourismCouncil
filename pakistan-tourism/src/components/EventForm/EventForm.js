import * as React from "react";
import { useState, useEffect } from "react";
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(JSON.stringify(event.target.value));
    console.log("title:" + event.target[0].value);
    console.log("address:" + event.target[2].value);
    console.log("city:" + event.target[4].value);
    console.log("category:" + event.target[6].value);
    console.log("contact:" + event.target[8].value);
    console.log("external:" + event.target[10].value);
    console.log("date/time:" + event.target[12].value);
    console.log("organised:" + event.target[14].value);
    console.log("long des:" + event.target[16].value);
    console.log("lat:" + event.target[22].value);
    console.log("lng:" + event.target[24].value);
    console.log("insta:" + event.target[26].value);
    console.log("you:" + event.target[28].value);
    console.log("face:" + event.target[30].value);

    // 0 4 6 8 10  12 14

    console.log("18:" + event.target[18].value);
    console.log("22:" + event.target[22].value);
    console.log("2:" + event.target[32].value);

    const data = new FormData(event.currentTarget);
    const response = await fetch(
      "http://localhost:4000/api/v1/events/addNewEvent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        // body: JSON.stringify({
        //   email: email_,
        //   password: password_,
        // }),
      }
    );
    if (response === "email/password incorrect") {
      console.log("email/password incorrect");
    } else {
      // navigate("/AdminPannelPage");
      console.log(response.json());
    }

    // navigate("/AdminPannelPage");
  };

  if (!events) return null;
  return (
    <div className={classes.wrapper}>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div className={classes.title}>
          <TextField
            fullWidth
            id='outlined-size-small'
            label='Title'
            size='small'
            margin='dense'
          />
        </div>
        <div className={classes.address}>
          <TextField
            fullWidth
            label='Address'
            id='outlined-size-small'
            size='small'
            margin='dense'
          />
        </div>
        <div className={classes.location}>
          <TextField
            id='outlined-size-small'
            label='City'
            size='small'
            margin='dense'
          />

          <TextField
            id='outlined-size-small'
            label='Category'
            size='small'
            margin='dense'
          />

          <TextField
            id='outlined-size-small'
            label='Contact No'
            size='small'
            margin='dense'
          />
        </div>
        <div>
          <div className={classes.title}>
            <TextField
              fullWidth
              id='outlined-size-small'
              label='External Link'
              size='small'
              margin='dense'
            />
          </div>
        </div>
        <div className={classes.title}>
          <div>
            <TextField
              fullWidth
              id='outlined-size-small'
              label='Date & Time'
              size='small'
              margin='dense'
            />
          </div>
          <div>
            <TextField
              fullWidth
              id='outlined-size-small'
              label='Organised By'
              size='small'
              margin='dense'
            />
          </div>
        </div>

        <div></div>
        <div className={classes.description}>
          <div className={classes.title}>
            <TextField
              fullWidth
              id='outlined-multiline-static'
              label='Long Description'
              margin='dense'
              multiline
              rows={2}
            />
          </div>
          <div className={classes.title}>
            <TextField
              fullWidth
              id='outlined-multiline-static'
              label='Short Description'
              margin='dense'
              multiline
              rows={1}
            />
          </div>
        </div>

        <div className={classes.title}>
          <TextField
            id='outlined-size-small'
            label='Lat'
            size='small'
            margin='dense'
          />

          <TextField
            id='outlined-size-small'
            label='Long'
            size='small'
            margin='dense'
          />
        </div>
        <div className={classes.Socialmedia}>
          <div className={classes.title}>
            <TextField
              id='outlined-size-small'
              label='Instagram'
              size='small'
            />
            <TextField id='outlined-size-small' label='Youtube' size='small' />
            <TextField id='outlined-size-small' label='Facebook' size='small' />
          </div>
        </div>
        <button>Submit Now</button>
      </form>
    </div>
  );
};
