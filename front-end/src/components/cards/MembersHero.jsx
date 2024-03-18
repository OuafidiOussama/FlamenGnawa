import React from "react";
import membersBackground from "../../assets/flamengnawa.png";
import MemberCard from "./MemberCard";


export default function MembersHero() {
  return (
    <div className="relative w-full uppercase overflow-clip ">
      <div className="w-full h-screen opacity-5">
        <img
          src={membersBackground}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 w-full h-full px-20 py-10 font-description">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-5 text-xl text-red">
            <hr className="w-80 border-[1px]" />
            <p>members</p>
            <hr className="w-80 border-[1px]" />
          </div>
          <p className="relative -top-1 -left-2 opacity-20 font-semibold text-red text-8xl tracking-wide">
            flamengnawa members
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center h-4/5 gap-20  ">
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </div>
      </div>
    </div>
  );
}
