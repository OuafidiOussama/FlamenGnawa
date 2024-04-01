import React, { useEffect } from "react";
import eventBackground from "../../../assets/events.png";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../../redux/slices/eventSlice";
import Loading from "../../partials/Loading";
import moment from "moment";

export default function EventHero() {
  const dispatch = useDispatch();
  const { loading, events } = useSelector((state) => state.events);

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  return events[0] && (
    <div className="relative w-full uppercase">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="w-full h-screen">
            <img
              src={eventBackground}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-0 w-full h-full px-20 py-10 font-description">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center gap-5 text-xl text-red">
                <hr className="w-80 border-[1px]" />
                <p>events</p>
                <hr className="w-80 border-[1px]" />
              </div>
              <p className="relative -top-1 -left-2 opacity-20 font-semibold text-red text-8xl tracking-wider">
                upcoming events
              </p>
            </div>
            <div className="flex h-4/5 items-center gap-20">
              <div className="w-1/2 px-20 flex flex-col justify-evenly h-full overflow-clip">
                <div className="flex items-center gap-5">
                  <Icon icon="mdi:location" className="h-16 w-16" />
                  <p className="flex flex-col">
                    location
                    <span className="pl-5 text-2xl font-semibold">
                      {events[0].location}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <Icon icon="mingcute:calendar-fill" className="h-16 w-16" />
                  <p className="flex flex-col">
                    event date
                    <span className="pl-5 text-2xl font-semibold">
                      {moment(events[0].eventDate).format('L')}
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <Icon icon="mdi:clock" className="h-16 w-16" />
                  <p className="flex flex-col">
                    event time
                    <span className="pl-5 text-2xl font-semibold">{moment(events[0].eventDate).format('LT')}</span>
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <Icon icon="solar:tag-price-bold" className="h-16 w-16" />
                  <p className="flex flex-col">
                    price
                    <span className="pl-5 text-2xl font-semibold">{events[0].price === -1 ? 'FREE': events[0].price + " DHS"}</span>
                  </p>
                </div>
              </div>
              <div className="w-1/2 h-full">
                <div className="pt-5 h-full flex justify-center">
                  <img src={events[0].eventPicture} alt="" className=" h-full object-fit" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
