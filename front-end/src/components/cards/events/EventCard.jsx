import React from "react";
import poster from "../../../assets/cover.jpg";
import { Icon } from "@iconify/react";

export default function EventCard({ isFlipped, handleFlip }) {
  return (
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
          <img src={poster} alt="" className=" h-full object-cover" />
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
                <span className="pl-5 text-2xl font-semibold">emi rabat</span>
              </p>
            </div>
            <div className="flex items-center gap-3 w-full">
              <Icon icon="mingcute:calendar-fill" className="h-10 w-10" />
              <p className="flex flex-col">
                event date
                <span className="pl-5 text-2xl font-semibold">22 december</span>
              </p>
            </div>
            <div className="flex items-center gap-3 w-full">
              <Icon icon="mdi:clock" className="h-10 w-10" />
              <p className="flex flex-col">
                event time
                <span className="pl-5 text-2xl font-semibold">16h00</span>
              </p>
            </div>
            <div className="flex items-center gap-3 w-full">
              <Icon icon="solar:tag-price-bold" className="h-10 w-10" />
              <p className="flex flex-col">
                price
                <span className="pl-5 text-2xl font-semibold">150 dhs</span>
              </p>
            </div>
          </div>
          <button className="w-full text-center border-2 py-3 hover:bg-dark-purple hover:border-transparent hover:text-white rounded-full transition-all duration-300">
            Get Your Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
