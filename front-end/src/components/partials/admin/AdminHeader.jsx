import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PathConstants from "../../../routes/PathConstants";

export default function AdminHeader() {
  const [isOpen, setHeader] = useState(true);
  const toggleHeader = () => {
    setHeader(!isOpen);
  };
  return (
    <div
      className={`${
        isOpen ? "w-[350px]" : "w-[55px]"
      } bg-dark-purple h-screen text-white overflow-hidden duration-300 transition-all relative`}
    >
      <div className="flex h-20 items-center gap-5 px-2">
        <button
          className="block border-0 bg-transparent"
          type="button"
          onClick={toggleHeader}
        >
          <Icon icon="material-symbols:menu" className="h-9 w-9" />
        </button>
        <p className="font-main text-xl ">
          <span className="text-red">F</span>lameGnawa
        </p>
      </div>
      <div className="h-full w-full flex flex-col gap-5 uppercase">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-xl font-bold gap-5 p-2 w-screen bg-red/50 "
              : "flex items-center text-xl font-bold gap-5 p-2 w-screen"
          }
          to={PathConstants.DASHBOARD}
        >
          <Icon icon="material-symbols:dashboard" className="text-4xl" />
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-xl font-bold gap-5 p-2 w-screen bg-red/50 "
              : "flex items-center text-xl font-bold gap-5 p-2 w-screen"
          }
          to={PathConstants.MEMBERS_TABLE}
        >
          <Icon icon="ic:baseline-people" className="text-4xl" />
          members
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-xl font-bold gap-5 p-2 w-screen bg-red/50 "
              : "flex items-center text-xl font-bold gap-5 p-2 w-screen"
          }
          to={PathConstants.EVENTS_TABLE}
        >
          <Icon icon="mdi:events-check" className="text-4xl" />
          events
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-xl font-bold gap-5 p-2 w-screen bg-red/50 "
              : "flex items-center text-xl font-bold gap-5 p-2 w-screen"
          }
          to={PathConstants.BLOG_TABLE}
        >
          <Icon icon="dashicons:welcome-write-blog" className="text-4xl" />
          Blog
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-xl font-bold gap-5 p-2 w-screen bg-red/50 "
              : "flex items-center text-xl font-bold gap-5 p-2 w-screen"
          }
          to={PathConstants.SHOP_TABLE}
        >
          <Icon icon="mdi:cart" className="text-4xl" />
          SHOP
        </NavLink>
        <div className="absolute bottom-0 w-full">
          <button className="flex items-center gap-6 w-screen px-3 py-3 hover:bg-red/50 text-xl font-bold transition-all duration-300">
            <Icon icon="streamline:logout-1-solid" className="text-3xl" />
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
}
