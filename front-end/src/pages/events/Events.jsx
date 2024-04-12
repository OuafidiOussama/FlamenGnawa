import React, { useEffect } from "react";
import EventsContainer from "../../components/containers/events/EventsContainer";
import {useDispatch, useSelector} from 'react-redux'
import Loading from '../../components/partials/Loading'
import {getAllEvents} from '../../redux/slices/eventSlice'

export default function Events() {
  const dispatch = useDispatch()
  const {loading, events} = useSelector(state=>state.events)
  useEffect(()=>{
    dispatch(getAllEvents())
  },[dispatch])
  return (
    <div className="font-description min-h-screen">
      <div className="py-10 flex flex-col items-center uppercase">
        <p className="relative -top-1 -left-2 opacity-20 font-semibold text-red text-8xl tracking-wider">
          Events
        </p>
      </div>
      {loading? <Loading /> : events.length === 0 ? <div className="flex justify-center items-center h-2/3 text-3xl md:text-5xl lg:text-8xl">Coming Soon!</div> : <EventsContainer events={events} />}
    </div>
  );
}
