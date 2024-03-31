import logo from "../../../assets/Final.png";
import { Icon } from "@iconify/react";
import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteCategory,
  getCategoryById,
} from "../../../redux/slices/catSlice";
import { useNavigate } from "react-router-dom";

export default function CategoryCard({ category }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id, categoryPicture, description, name } = category;
  const handleCatUpdate = async () => {
    await dispatch(getCategoryById(_id));
    navigate("/categories_form", { state: "update" });
  };
  const handleCatDelete = () => {
    dispatch(deleteCategory(_id));
  };
  return (
    <tr className="h-20 border-white border-b-2">
      <td className="flex justify-center items-center h-20 w-28">
        <img
          src={categoryPicture || logo}
          alt=""
          className="w-16 h-16 object-cover rounded-full"
        />
      </td>
      <td className="w-40">{name}</td>
      <td className="truncate w-full"><div className="h-12" dangerouslySetInnerHTML={{__html: description}}></div></td>
      <td className="w-48">
        <div className="flex justify-between px-2 text-white">
          <button
            onClick={handleCatUpdate}
            className="flex bg-in-stock py-2 px-2 rounded items-center gap-2"
          >
            <Icon icon="lucide:edit" className="text-2xl" />
          </button>
          <button
            onClick={handleCatDelete}
            className="flex bg-out-of-stock py-2 px-2 rounded items-center gap-2"
          >
            <Icon icon="ic:baseline-delete" className="text-2xl" />
          </button>
        </div>
      </td>
    </tr>
  );
}
