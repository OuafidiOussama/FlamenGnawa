import React from "react";
import ProductCard from "../cards/ProductCard";

export default function ProductsContainer() {
  return (
    <div className=" py-10 flex flex-wrap justify-center gap-10">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
