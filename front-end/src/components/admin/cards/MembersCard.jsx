import React from 'react'
import { Icon } from '@iconify/react'
import { useDispatch } from "react-redux";
import {
  getMemberById,
  deleteMember,
} from "../../../redux/slices/memberSlice";
import { useNavigate } from "react-router-dom";

export default function MembersCard({member}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id, user, quote, instrument } = member;
  const handleMemberUpdate = async () => {
    await dispatch(getMemberById(_id));
    navigate("/members_form", { state: "update" });
  };
  const handleMemberDelete = () => {
    dispatch(deleteMember(_id));
  };
  return (
    <tr className="h-20 border-white border-b-2">
      <td className="flex justify-center items-center h-20 w-28">
        <img
          src={user.profil_picture}
          alt=""
          className="w-16 h-16 object-cover rounded-full"
        />
      </td>
      <td className="w-40">{user.first_name + " " + user.last_name}</td>
      <td className="truncate w-full"><div className="h-12" dangerouslySetInnerHTML={{__html: quote}}></div></td>
      <td className="w-40">{instrument}</td>
      <td className="w-48">
        <div className="flex justify-between px-2 text-white">
          <button onClick={handleMemberUpdate} className="flex bg-in-stock py-2 px-2 rounded items-center gap-2">
            <Icon icon="lucide:edit" className="text-2xl" />
          </button>
          <button onClick={handleMemberDelete} className="flex bg-out-of-stock py-2 px-2 rounded items-center gap-2">
            <Icon icon="ic:baseline-delete" className="text-2xl" />
          </button>
        </div>
      </td>
    </tr>
  );
}
