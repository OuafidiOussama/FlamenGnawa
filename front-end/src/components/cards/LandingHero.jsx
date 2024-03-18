import React from "react";
import bg from "../../assets/hero.png";
import HeroSocials from "./HeroSocials";

export default function LandingHero() {
  return (
    <div className="w-full h-screen font-main">
      <div className="absolute top-0 w-full h-screen">
        <img src={bg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-1/2 w-full -translate-y-24 h-60 z-10 px-10 flex items-center">
        <div className="w-1/2 flex flex-col gap-2">
          <p className="uppercase text-2xl pl-10">welcome to </p>
          <div className="text-5xl text-right flex flex-col gap-5">
            <p className="uppercase white-stroke text-transparent">
              <span className="red-stroke">F</span>lamenGnawa's website
            </p>
            <p className="uppercase white-stroke text-transparent">
              the future of music
            </p>
            <p className="font-arabic text-4xl">
              "<span className="text-red">م</span>ازال نزرعو المحبة"
            </p>
          </div>
        </div>
        <div className="w-1/2 pr-10">
          <HeroSocials />
        </div>
      </div>
    </div>
  );
}
