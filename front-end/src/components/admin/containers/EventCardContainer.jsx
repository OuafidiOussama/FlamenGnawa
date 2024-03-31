import React from "react";
import EventsCard from "../cards/EventsCard";

export default function EventCardContainer({events}) {
  return (
    <tbody>
      {events.map(event=><EventsCard key={event._id} event={event} />)}
    </tbody>
  );
}
