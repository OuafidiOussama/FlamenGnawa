import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { brand, category, label, unitPrice, productPicture, _id, quantity } = product;
  const navigate = useNavigate();
  const productRedirect = () => {
    navigate(`/shop/${_id}`);
  };
  return (
    <div
      onClick={productRedirect}
      className="cursor-pointer bg-white shadow-2xl border-2 border-border w-80 h-[500px] overflow-clip rounded"
    >
      <div className="w-full hover:h-full h-2/3 flex justify-center group relative duration-300 transition-all">
        <p className={`uppercase absolute ${quantity > 0 ? 'bg-in-stock': 'bg-out-of-stock'} py-2 px-5 left-5 top-5`}>
          {quantity > 0 ? 'available': 'out of stock'}
        </p>
        <img
          src={productPicture}
          alt=""
          className="w-1/2 h-full object-cover object-bottom  duration-300 transition-all"
        />
      </div>
      <div className="p-4 flex flex-col justify-between text-black w-full h-1/3">
        <div className="flex flex-col justify-between h-2/3">
          <p className="">{label}</p>
          <p className="text-sm border-2 p-2 text-center">
            {brand}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs border-2 p-2">{category.name}</p>
          <p>{unitPrice} MAD</p>
        </div>
      </div>
    </div>
  );
}
