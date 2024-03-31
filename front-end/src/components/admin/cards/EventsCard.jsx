import { Icon } from '@iconify/react'
import React from 'react'
import logo from "../../../assets/Final.png";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  getEventById,
  deleteEvent,
} from "../../../redux/slices/eventSlice";
import moment from 'moment'

export default function EventsCard({event}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id, title, eventPicture, description, eventDate, location, price, tickets  } = event;
  const handleEventUpdate = async () => {
    await dispatch(getEventById(_id));
    navigate("/events_form", { state: "update" });
  };
  const handleEventDelete = () => {
    dispatch(deleteEvent(_id));
  };
  const date = moment(eventDate).format('LLL')
  return (
    <tr className="h-20 border-white border-b-2">
      <td className="flex justify-center items-center h-20 w-28">
        <img
          src={eventPicture || logo}
          alt=""
          className="w-16 h-16 object-cover rounded-full"
        />
      </td>
      <td className="w-40">{title}</td>
      <td className="truncate w-full"><div className="h-12" dangerouslySetInnerHTML={{__html: description}}></div></td>
      <td className="w-40">{date}</td>
      <td className="w-40">{tickets}</td>
      <td className="w-40">{location}</td>
      <td className="w-40">{price} DHS</td>
      <td className="w-48">
        <div className="flex justify-between px-2 text-white">
          <button onClick={handleEventUpdate} className="flex bg-in-stock py-2 px-2 rounded items-center gap-2">
            <Icon icon="lucide:edit" className="text-2xl" />
          </button>
          <button onClick={handleEventDelete} className="flex bg-out-of-stock py-2 px-2 rounded items-center gap-2">
            <Icon icon="ic:baseline-delete" className="text-2xl" />
          </button>
        </div>
      </td>
    </tr>
  )
}
