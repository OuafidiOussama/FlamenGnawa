import React from "react";
import ProductCard from "../cards/ProductCard";

export default function RelatedProductsContainer() {
  return (
    <div className="">
      <p className="text-center text-5xl pb-5 text-white">Simular Products</p>
      <div className="flex flex-wrap justify-center gap-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
