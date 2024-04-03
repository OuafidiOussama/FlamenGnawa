import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { clearCart, getTotals } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import CartCard from "../../components/cards/shop/CartCard";
import PayButton from "../../components/cards/PayButton";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col px-20 gap-5 py-10">
      <h2 className="text-2xl font-medium">Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="text-center">
          <p className=" h-[400px]">Your cart is empty</p>
          <div className="mt-4">
            <Link
              to="/shop"
              className="font-semibold flex items-center justify-center gap-2 border-2 border-transparent bg-red py-2 rounded w-40 hover:bg-transparent hover:border-red  duration-300 transition-all"
            >
              <Icon icon="ep:back" />
              <span className="">Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-4 gap-2 pb-2">
            <h3 className="product-title text-sm font-medium">Product</h3>
            <h3 className="price text-sm font-medium">Price</h3>
            <h3 className="quantity text-sm font-medium">Quantity</h3>
            <h3 className="total text-sm font-medium">Total</h3>
          </div>
          <div className="cart-items h-[400px]">
            <div className="h-[400px] overflow-auto">
              {cart.cartItems &&
                cart.cartItems.map((cartItem) => (
                  <CartCard key={cartItem._id} cartItem={cartItem} />
                ))}
            </div>
          </div>
          <div className="cart-summary flex justify-between items-start border-t border-gray-200 pt-4">
            <div className="flex gap-5">
              <Link
                to="/shop"
                className="font-semibold flex items-center justify-center gap-2 border-2 border-transparent bg-red py-2 rounded w-48 hover:bg-transparent hover:border-red  duration-300 transition-all"
              >
                <Icon icon="ep:back" />
                <span className="">Continue Shopping</span>
              </Link>
              <button
                className="border-2 bg-red border-transparent hover:bg-transparent hover:border-red duration-300 transition-all rounded px-4 py-2 font-medium"
                onClick={() => handleClearCart()}
              >
                Clear Cart
              </button>
            </div>

            <div className="w-96 flex flex-col gap-5">
              <div className="flex justify-between  font-semibold">
                <span>Subtotal</span>
                <span className="">{cart.cartTotalAmount} MAD</span>
              </div>
              {user && user._id ? (
                <PayButton cartItems={cart.cartItems} />
              ) : (
                <button
                  className="text-black hover:text-white hover:bg-red/20 transition-all duration-300 font-medium rounded px-4 py-2 w-full bg-white"
                  onClick={() => navigate("/login")}
                >
                  Login to Check out
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
