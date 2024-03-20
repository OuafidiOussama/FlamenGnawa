import React from "react";
import logo from "../../../assets/Final.png";

export default function CommentCard() {
  return (
    <div className="py-10 border-b-2 flex gap-3 px-10 mx-20">
      <div className="w-20 h-20 rounded-full overflow-clip">
        <img src={logo} alt="" className="w-full h-full object-cover " />
      </div>
      <div className="bg-border/50 rounded-xl w-full text-start py-2 px-3">
        <div className="flex items-center gap-3">
          <p>User Name</p>
          <p className="text-xs">{"<Email@email.com>"}</p>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora id
          soluta possimus ea incidunt? Esse, at! Modi impedit non ipsam.
          Nesciunt, ipsam illo! Esse incidunt dignissimos id aperiam fuga
          possimus.
        </p>
      </div>
    </div>
  );
}
