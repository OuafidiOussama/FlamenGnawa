import React from "react";
import ProductCard from "../../cards/shop/ProductCard";

export default function RelatedProductsContainer({relatedProducts}) {
  return (
    <div className="">
      <p className="text-center text-5xl pb-5 text-white">Simular Products</p>
      <div className="flex flex-wrap justify-center gap-10">
        {relatedProducts.map(product=><ProductCard product={product} />)}
      </div>
    </div>
  );
}
