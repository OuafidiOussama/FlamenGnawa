import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCheckoutSession } from "../../redux/slices/stripeSlice";

export default function PayButton({ cartItems }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const {loading} = useSelector((state) => state.stripe);
  const handleCheckout = () => {
    dispatch(createCheckoutSession({cartItems, userId: user._id}))
  };
  return (
    <button
      className="text-black hover:text-white hover:bg-red/20 transition-all duration-300 font-medium rounded px-4 py-2 w-full bg-white"
      onClick={handleCheckout}
    >
      {loading? '...processing' : 'Check Out'}
    </button>
  );
}
