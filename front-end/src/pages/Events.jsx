import React from "react";
import EventsContainer from "../components/containers/EventsContainer";

export default function Events() {
  return (
    <div className="font-description min-h-screen">
      <div className="py-10 flex flex-col items-center uppercase">
        <p className="relative -top-1 -left-2 opacity-20 font-semibold text-red text-8xl tracking-wider">
          Events
        </p>
      </div>
      <EventsContainer />
    </div>
  );
}
