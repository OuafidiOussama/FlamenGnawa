import React from 'react'
import logo from "../../../assets/Final.png";
import { Icon } from "@iconify/react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  getArticleById,
  deleteArticle,
} from "../../../redux/slices/blogSlice";
import moment from 'moment'

export default function ArticleCard({article}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id, title, postPicture, creator, content, createdAt } = article;
  const date = moment(createdAt).format('L')
  const handleProductUpdate = async () => {
    await dispatch(getArticleById(_id));
    navigate("/blog_form", { state: "update" });
  };
  const handleProductDelete = () => {
    dispatch(deleteArticle(_id));
  };
  return (
    <tr className="h-20 border-white border-b-2">
      <td className="flex justify-center items-center h-20 w-28">
        <img
          src={postPicture || logo}
          alt=""
          className="w-16 h-16 object-cover rounded-full"
        />
      </td>
      <td className="w-40">{title}</td>
      <td className="truncate w-full"><div className="h-12" dangerouslySetInnerHTML={{__html: content}}></div></td>
      <td className="w-40">{creator.first_name + " " + creator.last_name}</td>
      <td className="w-40">{date}</td>
      <td className="w-48">
        <div className="flex justify-between px-2 text-white">
          <button onClick={handleProductUpdate} className="flex bg-in-stock py-2 px-2 rounded items-center gap-2">
            <Icon icon="lucide:edit" className="text-2xl" />
          </button>
          <button onClick={handleProductDelete} className="flex bg-out-of-stock py-2 px-2 rounded items-center gap-2">
            <Icon icon="ic:baseline-delete" className="text-2xl" />
          </button>
        </div>
      </td>
    </tr>
  )
}
