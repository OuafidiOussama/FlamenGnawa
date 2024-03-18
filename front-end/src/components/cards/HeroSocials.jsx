import React from "react";
import { Icon } from "@iconify/react";

export default function HeroSocials() {
  return (
    <ul className="flex flex-col justify-end items-end text-4xl gap-5">
      <a href="https://www.instagram.com/flamengnawa/" target="_blank">
        <li className="w-52 flex cursor-pointer justify-end group overflow-clip group relative">
          <Icon
            icon="mdi:instagram"
            className="group-hover:text-red transition-all duration-300"
          />
          <p className="group-hover:-translate-x-40 text-xl w-0 h-0 relative top-0 translate-x-0 translate-y-0.5 right-0 duration-300 transition-all">
            <span className="text-red">I</span>nstagram
          </p>
        </li>
      </a>
      <a href="https://www.facebook.com/flamengnawa" target="_blank">
        <li className="w-52 flex cursor-pointer justify-end group overflow-clip group relative">
          <Icon
            icon="ant-design:facebook-filled"
            className="group-hover:text-red transition-all duration-300"
          />
          <p className="group-hover:-translate-x-36 text-xl w-0 h-0 relative top-0 translate-x-0 translate-y-0.5 right-0 duration-300 transition-all">
            <span className="text-red">F</span>acebook
          </p>
        </li>
      </a>
      <a href="https://www.tiktok.com/@flamengnawa" target="_blank">
        <li className="w-52 flex cursor-pointer justify-end group overflow-clip group relative">
          <Icon
            icon="iconoir:tiktok"
            className="group-hover:text-red transition-all duration-300"
          />
          <p className="group-hover:-translate-x-28 text-xl w-0 h-0 relative top-0 translate-x-0 translate-y-0.5 right-0 duration-300 transition-all">
            <span className="text-red">T</span>ikTok
          </p>
        </li>
      </a>
      <a href="https://www.youtube.com/@flamengnawa" target="_blank">
        <li className="w-52 flex cursor-pointer justify-end group overflow-clip group relative">
          <Icon
            icon="fa6-brands:square-youtube"
            className="group-hover:text-red transition-all duration-300"
          />
          <p className="group-hover:-translate-x-36 text-xl w-0 h-0 relative top-0 translate-x-0 translate-y-0.5 right-0 duration-300 transition-all">
            <span className="text-red">Y</span>outube
          </p>
        </li>
      </a>
      <a href="https://open.spotify.com/artist/04947wzNph1S7XZrtfBgOI?si=c-l29-PnRqm7vx-jTT_DBg" target="_blank">
        <li className="w-52 flex cursor-pointer justify-end group overflow-clip group relative">
          <Icon
            icon="mdi:spotify"
            className="group-hover:text-red transition-all duration-300"
          />
          <p className="group-hover:-translate-x-36 text-xl w-0 h-0 relative top-0 translate-x-0 translate-y-0.5 right-0 duration-300 transition-all">
            <span className="text-red">S</span>potify
          </p>
        </li>
      </a>
    </ul>
  );
}
