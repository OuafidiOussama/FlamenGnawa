import React from "react";
import bg from "../../../assets/hero.png";
import HeroSocials from "./HeroSocials";

export default function LandingHero() {
  return (
    <div className="w-full h-screen font-main">
      <div className="absolute top-0 w-full h-screen">
        <img src={bg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute md:pt-0 pt-36 md:top-1/2 w-full md:-translate-y-24 h-60 z-10 md:px-10 flex flex-col items-center md:flex-row">
        <div className="md:w-1/2 flex flex-col gap-2">
          <p className="uppercase text-center ms:text-start text-2xl pl-10">welcome to </p>
          <div className="text-3xl sm:text-4xl md:text-5xl text-center md:text-right flex flex-col gap-5">
            <p className="uppercase white-stroke text-transparent">
              <span className="red-stroke">F</span>lamenGnawa's website the future of music
            </p>
            {/* <p className="uppercase white-stroke text-transparent">
              the future of music
            </p> */}
            <p className="font-arabic text-3xl sm:text-4xl">
              "<span className="text-red">م</span>ازال نزرعو المحبة"
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pr-10">
          <HeroSocials />
        </div>
      </div>
    </div>
  );
}
