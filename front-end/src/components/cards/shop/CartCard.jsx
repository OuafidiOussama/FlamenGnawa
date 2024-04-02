import React from "react";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
} from "../../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify/react";

export default function CartCard({ cartItem }) {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  return (
    <div
      className="grid grid-cols-4 gap-2 border-t border-gray-200 py-2"
      key={cartItem._id}
    >
      <div className="flex gap-5">
        <img
          src={cartItem.productPicture}
          alt={cartItem.label}
          className="w-24 h-24 object-cover rounded"
        />
        <div>
          <h3 className="font-medium pb-1">{cartItem.label}</h3>
          <p
            className="text-sm text-gray-500 w-52 truncate pb-6"
            dangerouslySetInnerHTML={{
              __html: cartItem.description,
            }}
          ></p>
          <button
            onClick={() => handleRemoveFromCart(cartItem)}
            className="text-white hover:text-red transition-all duration-300"
          >
            <Icon icon="pajamas:remove" className="text-xl" />
          </button>
        </div>
      </div>
      <div className="text-lg font-medium">
        ${cartItem.unitPrice}
      </div>
      <div className="flex gap-5 items-start">
        <button
          onClick={() => handleDecreaseCart(cartItem)}
          className="border border-gray-300 rounded px-2"
        >
          -
        </button>
        <div className="count px-2">{cartItem.cartQuantity}</div>
        <button
          onClick={() => handleAddToCart(cartItem)}
          className="border border-gray-300 rounded px-2"
        >
          +
        </button>
      </div>
      <div className="font-medium">
        ${(cartItem.unitPrice * cartItem.cartQuantity).toFixed(2)}
      </div>
    </div>
  );
}
