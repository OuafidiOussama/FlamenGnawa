import React from 'react'
import { Icon } from '@iconify/react'
import logo from "../../../assets/Final.png";
import { useDispatch } from "react-redux";
import {
  getProductById,
  deleteProduct,
} from "../../../redux/slices/ShopSlice";
import { useNavigate } from "react-router-dom";

export default function ProductCard({product}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id, label, brand, quantity, unitPrice, productPicture, category, description } = product;
  const handleProductUpdate = async () => {
    await dispatch(getProductById(_id));
    navigate("/shop_form", { state: "update" });
  };
  const handleProductDelete = () => {
    dispatch(deleteProduct(_id));
  };
  return (
    <tr className="h-20 border-white border-b-2">
      <td className="flex justify-center items-center h-20 w-28">
        <img
          src={productPicture || logo}
          alt=""
          className="w-16 h-16 object-cover rounded-full"
        />
      </td>
      <td className="w-40">{label}</td>
      <td className="truncate w-full"><div className="h-12" dangerouslySetInnerHTML={{__html: description}}></div></td>
      <td className="w-40">{brand}</td>
      <td className="w-40">{quantity}</td>
      <td className="w-40">{unitPrice} DHS</td>
      <td className="w-40">{category.name}</td>
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
