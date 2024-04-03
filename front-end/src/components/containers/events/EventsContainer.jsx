import React from 'react'
import EventCard from '../../cards/events/EventCard'

export default function EventsContainer({events}) {
  
  return (
    <div className=" py-10 flex flex-wrap justify-center gap-10">
      {events && events.map(event=> <EventCard key={event._id} event={event} />)}
    </div>
  )
}
