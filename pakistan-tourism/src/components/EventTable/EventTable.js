import classes from "./EventTable.module.css";
import { useEffect, useState } from "react";
import { EventForm } from "../EventForm/EventForm";

import { ImLocation2 } from "react-icons/im";
import { MdAddCircleOutline } from "react-icons/md";

import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const EventTable = () => {
  const [events, setEvents] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    const response = await fetch(
      "http://localhost:4000/api/v1/events/getuserevents",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ createdBy: "punjab@ptc.com" }),
      }
    );

    if (response === "No Event Found") {
      console.log("No Event Found");
    } else {
      // navigate("/AdminPannelPage");
      const data = await response.json();
      const datamap = Array.from(data);
      console.log("res" + datamap);
      setEvents(datamap);
    }
  };

  if (!events) return null;
  return (
    <div className={classes.main}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <EventForm></EventForm>
        </Box>
      </Modal>

      <div className={classes.buttonheader}>
        <span className={classes.head}>Your Upcoming Events</span>

        <span className={classes.head}>
          <button onClick={handleOpen}>
            <MdAddCircleOutline />
            Add New Event
          </button>
        </span>
      </div>

      <ul className={classes.responsive_table}>
        <li className={classes.table_header}>
          <div className={(classes.col, classes.col_1)}>Event</div>
          <div className={(classes.col, classes.col_2)}>Location</div>
          <div className={(classes.col, classes.col_3)}>Date & Time</div>
          <div className={(classes.col, classes.col_4)}>Options</div>
        </li>

        {events.map((e) => (
          <li className={classes.table_row}>
            <div className={(classes.col, classes.col_1)} data-label='Event'>
              {e.title}
            </div>
            <div className={(classes.col, classes.col_2)} data-label='Location'>
              <ImLocation2 />
              &nbsp; {e.city}
            </div>
            <div className={(classes.col, classes.col_3)} data-label='Date'>
              {e.eventDateTime}
            </div>
            <div className={(classes.col, classes.col_4)} data-label='Options'>
              <span className={classes.option}>Edit</span>
              <span className={classes.option}>Remove</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
