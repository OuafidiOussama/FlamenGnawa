import React, { useState } from "react";
import RelatedProductsContainer from "../components/containers/RelatedProductsContainer";
import bass from "../assets/bass1.png";
import {Icon} from '@iconify/react'
import CitiesInput from "../components/containers/CitiesInput";

export default function ProductDetails() {
  const [qty, setQty] = useState(1)
  const addOne = () =>{
    setQty( qty + 1 )
  }
  const subtractOne = () =>{
    if(qty > 1){
      setQty( qty - 1 )
    }
  }
  const description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, voluptatum dolorum dolores nisi debitis culpa maiores provident impedit fuga. Accusamus doloremque facere vero. Sit quas, itaque ab dolore nihil vel?'
  return (
    <div className="w-full font-description flex flex-col gap-5 px-10 py-10">
      <div className="flex w-full h-screen gap-5 overflow-clip">
        <div className="w-9/12 bg-white flex h-full shadow-2xl border-2 border-border rounded">
          <div className="w-1/3 h-full py-5 flex justify-center border-r-2 border-border">
            <img src={bass} alt="" className="h-full object-cover" />
          </div>
          <div className="w-2/3 bg-border h-full text-black px-10 py-5">
            <p className="text-center text-4xl font-bold pb-5">Bass Guitar</p>
            <p className=" text-lg pb-2">Description</p>
            <textarea name="" id="" value={description} readOnly className="cursor-default pl-4 resize-none w-full h-full outline-none bg-transparent text-sm"></textarea>
          </div>
        </div>
        <div className="flex flex-col justify-center w-3/12 h-4/5 bg-border shadow-2xl border-2 border-border rounded-xl text-black p-5">
        <p className="text-center text-4xl font-bold pb-5">Bass Guitar</p>
          <p className="flex gap-0.5 text-4xl pb-5"><span className="text-lg">$</span>199.99</p>
          <p className="pb-2">Quanity:</p>
          <div className="flex items-center gap-4 justify-center pb-5">
            <Icon icon="icons8:minus" className="cursor-pointer text-3xl" onClick={subtractOne} />
            <input readOnly type="text" name="" id="" value={qty} className=" rounded-full outline-none py-2 text-center select-none"/>
            <Icon icon="icons8:plus" className="cursor-pointer text-3xl" onClick={addOne} />
          </div>
          <p className="pb-2">Status:</p>
          <div className=" pb-5">
            <div className="bg-in-stock text-center rounded-full outline-none py-2 px-10 select-none">
              In-Stock
            </div>
          </div>
          <p className="pb-2 flex items-center"><Icon icon="basil:location-solid"  className=""/>Delevery:</p>
          <div className=" pb-5">
            <CitiesInput />
          </div>
          <button className="w-full text-center border-2 py-3 hover:bg-dark-purple hover:border-transparent hover:text-white rounded-full transition-all duration-300">Add To Cart</button>
          {/* <button></button> */}
        </div>
      </div>
      <RelatedProductsContainer />
    </div>
  );
}
