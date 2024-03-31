import React from "react";
import CategoryCard from "../cards/CategoryCard";

export default function CategoryCardContainer({categories}) {
  return (
    <tbody>
      {categories && categories.map(cat=><CategoryCard category={cat} key={cat._id} />)}
    </tbody>
  );
}
