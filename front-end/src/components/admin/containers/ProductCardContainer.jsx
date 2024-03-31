import React from "react";
import ProductCard from "../cards/ProductCard";

export default function ProductCardContainer({products}) {
  return (
    <tbody>
      {products.map(product=><ProductCard product={product} key={product._id} />)}
    </tbody>
  );
}
