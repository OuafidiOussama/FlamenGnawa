import React from "react";
import PathConstants from "../../routes/PathConstants";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <div className="bg-dark-purple h-20 w-full flex items-center justify-between px-10 font-main">
      <NavLink
        className="flex items-center gap-3 font-black text-3xl"
        to={PathConstants.HOME}
      >
        <p>
          <span className="text-red">F</span>lamen
        </p>
        <img src={logo} alt="logo" className="w-8" />
        <p>Gnawa</p>
      </NavLink>
      <div>
        <ul className="flex text-4xl gap-5">
          <a href="https://www.instagram.com/flamengnawa/" target="_blank">
            <li className="cursor-pointer">
              <Icon
                icon="mdi:instagram"
                className="hover:text-red transition-all duration-300 hover:scale-125"
                title="Instagram"
              />
            </li>
          </a>
          <a href="https://www.facebook.com/flamengnawa" target="_blank">
            <li className="cursor-pointer">
              <Icon
                icon="ant-design:facebook-filled"
                className="hover:text-red transition-all duration-300 hover:scale-125"
                title="Facebook"
              />
            </li>
          </a>
          <a href="https://www.tiktok.com/@flamengnawa" target="_blank">
            <li className="cursor-pointer">
              <Icon
                icon="iconoir:tiktok"
                className="hover:text-red transition-all duration-300 hover:scale-125"
                title="TikTok"
              />
            </li>
          </a>
          <a href="https://www.youtube.com/@flamengnawa" target="_blank">
            <li className="cursor-pointer">
              <Icon
                icon="fa6-brands:square-youtube"
                className="hover:text-red transition-all duration-300 hover:scale-125"
                title="Youtube"
              />
            </li>
          </a>
          <a href="https://open.spotify.com/artist/04947wzNph1S7XZrtfBgOI?si=c-l29-PnRqm7vx-jTT_DBg" target="_blank">
            <li className="cursor-pointer">
              <Icon
                icon="mdi:spotify"
                className="hover:text-red transition-all duration-300 hover:scale-125"
                title="Spotify"
              />
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
