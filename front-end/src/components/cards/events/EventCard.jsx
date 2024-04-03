import React, { useState } from "react";
import moment from "moment";
import { Icon } from "@iconify/react";
import BookingForm from "./BookingForm";
import { useSelector } from "react-redux";

export default function EventCard({ event }) {
  const {user} = useSelector(state=>state.auth)
  const { eventPicture, eventDate, location, price, tickets } = event;
  const [isFlipped, setFlipped] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const handleFlip = () => {
    setFlipped(!isFlipped);
  };
  const handleGetTicket = () => {
    if (tickets > 0) {
      setShowBookingForm(true);
    }
  };
  return (
    <>
      <div
        className={`flip ${
          isFlipped ? "flipped" : ""
        } w-80 h-96 rounded overflow-hidden flex`}
      >
        <div className="flip-content">
          <div
            className="w-full h-full group flex justify-center flip-front relative cursor-pointer"
            onClick={handleFlip}
          >
            <img src={eventPicture} alt="" className=" h-full object-cover" />
          </div>
          <div className="bg-white w-full h-full flip-back text-black p-5 flex gap-5 flex-col justify-between">
            <div
              className="w-full h-full flex flex-col justify-center items-center uppercase cursor-pointer"
              onClick={handleFlip}
            >
              <div className="flex items-center gap-3 w-full">
                <Icon icon="mdi:location" className="h-10 w-10" />
                <p className="flex flex-col">
                  location
                  <span
                    title={location}
                    className="pl-5 text-2xl w-52 font-semibold truncate"
                  >
                    {location}
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-3 w-full">
                <Icon icon="mingcute:calendar-fill" className="h-10 w-10" />
                <p className="flex flex-col">
                  event date
                  <span className="pl-5 text-2xl font-semibold">
                    {moment(eventDate).format("L")}
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-3 w-full">
                <Icon icon="mdi:clock" className="h-10 w-10" />
                <p className="flex flex-col">
                  event time
                  <span className="pl-5 text-2xl font-semibold">
                    {moment(eventDate).format("LT")}
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-3 w-full">
                <Icon icon="solar:tag-price-bold" className="h-10 w-10" />
                <p className="flex flex-col">
                  price
                  <span className="pl-5 text-2xl font-semibold">
                    {price === -1 ? "FREE" : price + " dhs"}
                  </span>
                </p>
              </div>
            </div>
            <button
              disabled={tickets === 0}
              onClick={handleGetTicket}
              className={`${
                tickets === 0
                  ? "cursor-not-allowed w-full text-center border-2 py-3 hover:bg-red hover:border-transparent hover:text-white rounded-full transition-all duration-300"
                  : "w-full text-center border-2 py-3 hover:bg-dark-purple hover:border-transparent hover:text-white rounded-full transition-all duration-300"
              }`}
            >
              {tickets === 0 ? "No Tickets Available" : "Get Your Ticket"}
            </button>
          </div>
        </div>
      </div>
      {showBookingForm && <BookingForm event={event} user={user} close={()=>setShowBookingForm(false)} />}
    </>
  );
}
