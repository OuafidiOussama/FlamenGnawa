import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import EventCardContainer from "../../../components/admin/containers/EventCardContainer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllEvents } from "../../../redux/slices/eventSlice";
import Loading from "../../../components/partials/Loading";

export default function EventsTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);
  const { loading, events } = useSelector((state) => state.events);
  const handleEventRedirect = () => {
    navigate("/events_form", { state: "create" });
  };
  return (
    <div className="px-10 py-5 h-screen overflow-hidden">
      <div className="bg-border/20 h-full rounded-xl flex flex-col p-3 gap-5">
        <div className="border-b-4 py-1 border-border h-14 pr- flex justify-between">
          <p className="font-bold text-4xl capitalize">Events</p>
          <button
            onClick={handleEventRedirect}
            className="flex items-center gap-2 bg-purple text-white py-2 px-5 rounded"
          >
            <Icon icon="basil:add-solid" className="text-2xl" /> Add Event
          </button>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <div className="w-full h-full bg-black/10 rounded-xl overflow-y-auto">
            {events && events.length === 0 ? (
              <div className="flex w-full h-full justify-center items-center">
                <p className="text-xl font-bold ">There is no Events!</p>
              </div>
            ) : (
              <table className="w-full table-fixed text-center">
                <thead className="border-white border-b-2 h-10">
                  <tr>
                    <th className="w-20">Picture</th>
                    <th className="w-20 text-center">title</th>
                    <th className="w-52 overflow-hidden">Desciption</th>
                    <th className="w-20">Date</th>
                    <th className="w-20">Tickets</th>
                    <th className="w-20">Location</th>
                    <th className="w-20">Price</th>
                    <th className="w-20">Actions</th>
                  </tr>
                </thead>
                <EventCardContainer events={events} />
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
