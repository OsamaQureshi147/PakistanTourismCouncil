import classes from "./EventTable.module.css";
import { useEffect, useState } from "react";

import { ImLocation2 } from "react-icons/im";

export const EventTable = () => {
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
    <div className={classes.main}>
      <span className={classes.head}>Your Upcoming Events</span>

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
