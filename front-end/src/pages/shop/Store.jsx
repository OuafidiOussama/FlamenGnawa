import React, { useEffect } from "react";
import ProductsContainer from "../../components/containers/shop/ProductsContainer";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/partials/Loading";
import { getAllProducts } from "../../redux/slices/ShopSlice";

export default function Store() {
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.shop);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div className="font-description min-h-screen">
      <div className="py-10 flex flex-col items-center uppercase">
        <p className="relative -top-1 -left-2 opacity-20 font-semibold text-red text-8xl tracking-wider">
          Shop
        </p>
      </div>
      {loading ? (
        <Loading />
      ) : products.length === 0 ? (
        <div className="flex justify-center items-center h-full text-3xl md:text-5xl lg:text-8xl">
          Coming Soon!
        </div>
      ) : (
        <ProductsContainer products={products} />
      )}
    </div>
  );
}
