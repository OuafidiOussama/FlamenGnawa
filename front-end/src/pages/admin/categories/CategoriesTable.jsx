import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import CategoryCardContainer from "../../../components/admin/containers/CategoryCardContainer";
import Loading from "../../../components/partials/Loading";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/slices/catSlice";
import { useNavigate } from "react-router-dom";

export default function CategoriesTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  const { loading, categories } = useSelector((state) => state.categories);
  const handleCatRedirect = () => {
    navigate("/categories_form", {state: 'create'});
  };
  return (
    <div className="px-10 py-5 h-screen overflow-hidden">
      <div className="bg-border/20 h-full rounded-xl flex flex-col p-3 gap-5">
        <div className="border-b-4 py-1 border-border h-14 flex justify-between">
          <p className="font-bold text-4xl capitalize">categories</p>
          <button
            onClick={handleCatRedirect}
            className="flex items-center gap-2 bg-purple text-white py-2 px-5 rounded"
          >
            <Icon icon="basil:add-solid" className="text-2xl" /> Add Category
          </button>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <div className="w-full h-full bg-black/10 rounded-xl overflow-y-auto">
            {categories && categories.length === 0 ? (
              <div className="flex w-full h-full justify-center items-center">
                <p className="text-xl font-bold ">There is no categories!</p>
              </div>
            ) : (
              <table className="w-full table-fixed text-center">
                <thead className="border-white border-b-2 h-10">
                  <tr>
                    <th className="w-20">Picture</th>
                    <th className="w-40 text-center">Name</th>
                    <th className="w-96 overflow-hidden">Description</th>
                    <th className="w-20">Actions</th>
                  </tr>
                </thead>
                <CategoryCardContainer categories={categories} />
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
