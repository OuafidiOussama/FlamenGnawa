import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../../redux/slices/ShopSlice";
import ProductCardContainer from "../../../components/admin/containers/ProductCardContainer";
import Loading from "../../../components/partials/Loading";

export default function ShopTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  const { loading, products } = useSelector((state) => state.shop);
  const handleShopRedirect = () => {
    navigate("/shop_form", { state: "create" });
  };
  return (
    <div className="px-10 py-5 h-screen overflow-hidden">
      <div className="bg-border/20 h-full rounded-xl flex flex-col p-3 gap-5">
        <div className="border-b-4 py-1 border-border h-14 pr- flex justify-between">
          <p className="font-bold text-4xl capitalize">Shop</p>
          <button
            onClick={handleShopRedirect}
            className="flex items-center gap-2 bg-purple text-white py-2 px-5 rounded"
          >
            <Icon icon="basil:add-solid" className="text-2xl" /> Add Product
          </button>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <div className="w-full h-full bg-black/10 rounded-xl overflow-y-auto">
            {products && products.length === 0 ? (
              <div className="flex w-full h-full justify-center items-center">
                <p className="text-xl font-bold ">There is no Products!</p>
              </div>
            ) : (
              <table className="w-full table-fixed text-center">
                <thead className="border-white border-b-2 h-10">
                  <tr>
                    <th className="w-20">Picture</th>
                    <th className="w-20 text-center">Label</th>
                    <th className="w-52 overflow-hidden">Desciption</th>
                    <th className="w-20">Brand</th>
                    <th className="w-20">Quanity</th>
                    <th className="w-20">Price</th>
                    <th className="w-20">Category</th>
                    <th className="w-20">Actions</th>
                  </tr>
                </thead>
                <ProductCardContainer products={products} />
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
