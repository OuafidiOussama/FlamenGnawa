import React from "react";
import bass from "../../assets/bass1.png";
import { useNavigate } from "react-router-dom";

export default function ProductCard() {
    const navigate = useNavigate()
    const productRedirect = () => {
        navigate('/shop/1')
    }
  return (
    <div onClick={productRedirect} className="cursor-pointer bg-white shadow-2xl border-2 border-border w-80 h-[500px] overflow-clip rounded">
      <div className="w-full hover:h-full h-2/3 flex justify-center group relative duration-300 transition-all">
        <p className="uppercase absolute bg-in-stock py-2 px-5 left-5 top-5">
          available
        </p>
        <img
          src={bass}
          alt=""
          className="w-1/2 h-full object-cover object-bottom  duration-300 transition-all"
        />
      </div>
      <div className="p-4 flex flex-col justify-between text-black w-full h-1/3">
        <div className="flex flex-col justify-between h-2/3">
          <p className="">Bass Guitar</p>
          <p className="text-sm border-2 p-2 text-center">
            Finder | Beige | 4 Strings
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-xs border-2 p-2">Guitars</p>
          <p>$199.99</p>
        </div>
      </div>
    </div>
  );
}
