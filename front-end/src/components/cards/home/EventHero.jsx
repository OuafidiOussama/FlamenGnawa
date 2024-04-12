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

  return (
    events[0] && (
      <div className="relative w-full uppercase h-[100vh] ">
        <div className="w-full h-full">
          <img
            src={eventBackground}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="absolute top-0 w-full h-full md:px-20 py-10 font-description">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center gap-5 text-xl text-red">
                  <hr className="md:w-80 w-20 border-[1px]" />
                  <p>events</p>
                  <hr className="md:w-80 w-20 border-[1px]" />
                </div>
                <p className="relative -top-1 -left-2 opacity-20 font-semibold text-red text-2xl md:text-5xl xl:text-8xl tracking-wider">
                  upcoming events
                </p>
              </div>
              <div className="flex flex-col md:flex-row md:h-4/5 items-center gap-5 md:gap-20">
                <div className="md:w-1/2 xl:px-20 flex flex-col justify-evenly h-full overflow-clip">
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
                        {moment(events[0].eventDate).format("L")}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-5">
                    <Icon icon="mdi:clock" className="h-16 w-16" />
                    <p className="flex flex-col">
                      event time
                      <span className="pl-5 text-2xl font-semibold">
                        {moment(events[0].eventDate).format("LT")}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-5">
                    <Icon icon="solar:tag-price-bold" className="h-16 w-16" />
                    <p className="flex flex-col">
                      price
                      <span className="pl-5 text-2xl font-semibold">
                        {events[0].price === -1
                          ? "FREE"
                          : events[0].price + " DHS"}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-1/2 h-full">
                  <div className="pt-5 w-full h-full md:flex md:justify-center">
                    <img
                      src={events[0].eventPicture}
                      alt=""
                      className="w-full h-[40vh] md:h-full object-contain md:object-fit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    )
  );
}
