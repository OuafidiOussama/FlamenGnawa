import React, { useState } from 'react'
import EventCard from '../cards/EventCard'

export default function EventsContainer() {
  const [isFlipped, setFlipped] = useState(false);
  const handleFlip = ()=>{
    setFlipped(!isFlipped)
  }
  return (
    <div className=" py-10 flex flex-wrap justify-center gap-10">
      <EventCard handleFlip={handleFlip} isFlipped={isFlipped} />
      <EventCard handleFlip={handleFlip} isFlipped={isFlipped} />
      <EventCard handleFlip={handleFlip} isFlipped={isFlipped} />
    </div>
  )
}
