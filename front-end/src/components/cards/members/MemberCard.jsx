import { Icon } from "@iconify/react";
import React, { useState } from "react";

export default function MemberCard({ member }) {
  const { user, instrument, quote } = member;
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <div className="w-96 mx-auto h-96 bg-dark-purple rounded-xl relative">
      <div className="relative top-5 left-1/2 -translate-x-14">
        <div className="absolute -top-2 -left-2 bg-black rounded-full w-32 h-32 -z-10"></div>
        <img
          src={user.profil_picture}
          alt=""
          className="w-28 h-28 object-cover rounded-full cursor-pointer"
          onClick={toggleModal}
        />
      </div>
      <div className="px-5 translate-y-10 h-full flex flex-col gap-2 items-center">
        <p>{user.first_name + " " + user.last_name}</p>
        <p>
          role:{" "}
          <span className="text-red/80 text-xl font-main">{instrument}</span>
        </p>
        <p
          className="w-full text-center text-xs h-full"
          dangerouslySetInnerHTML={{ __html: quote }}
        ></p>
      </div>
      {modalOpen && (
        <div className="absolute top-0 left-0 z-50 w-full h-full flex items-center justify-center rounded-lg bg-dark-purple overflow-clip">
          <div className="bg-transparent p-8">
            <img src={user.profil_picture} alt="" className="w-full h-auto" />
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-red/80 hover:text-red-500"
            >
              <Icon icon="material-symbols:close" className="text-2xl font-bold" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
