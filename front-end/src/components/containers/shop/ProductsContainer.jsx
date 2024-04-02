import React from "react";
import ProductCard from "../../cards/shop/ProductCard";

export default function ProductsContainer({products}) {
  return (
    <div className=" py-10 flex flex-wrap justify-center gap-10">
      {products && products.map(product=><ProductCard key={product._id} product={product} />)}
    </div>
  );
}
