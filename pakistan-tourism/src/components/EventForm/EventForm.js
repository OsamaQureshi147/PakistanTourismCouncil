import * as React from "react";
import { useState, useEffect } from "react";
import { EventListItem } from "./EventListItem";
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
    <div>
      {events.map((e) => (
        <EventListItem
          title={e.title}
          country={e.country}
          time={e.eventDateTime}
        />
      ))}
    </div>
  );
};
