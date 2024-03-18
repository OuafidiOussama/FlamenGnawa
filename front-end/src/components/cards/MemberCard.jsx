import React from "react";
import membersBackground from "../../assets/flamengnawa.png";

export default function MemberCard() {
  return (
    <div className="w-80 h-28 group hover:h-4/5 bg-dark-purple rounded-xl relative duration-300 transition-all">
      <div className="absolute left-1/2 -translate-x-14 -translate-y-14">
        <div className="absolute -top-2 -left-2 bg-black rounded-full w-32 h-32 -z-10"></div>
        <img
          src={membersBackground}
          alt=""
          className="w-28 h-28 rounded-full"
        />
      </div>
      <div className="px-5 translate-y-20 overflow-clip h-5 group-hover:h-full flex flex-col gap-5 items-center duration-300 transition-all">
        <p>OUAFIDI Oussama</p>
        <p>role: Bassist</p>
        <p className="w-full text-center text-sm h-full">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          doloribus non distinctio tempore ab fuga blanditiis debitis labore ea
          consectetur et culpa, explicabo, nisi animi nihil perspiciatis placeat
          deleniti possimus."
        </p>
      </div>
    </div>
  );
}
