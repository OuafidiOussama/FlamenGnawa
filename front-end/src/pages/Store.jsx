import React from "react";
import ProductCard from "../components/cards/ProductCard";

export default function Store() {
  return (
    <div className="font-description">
      <div className="py-10 flex flex-col items-center uppercase">
        <p className="relative -top-1 -left-2 opacity-20 font-semibold text-red text-8xl tracking-wider">
          Shop
        </p>
      </div>
      <div className=" py-10 flex flex-wrap justify-center gap-10">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
