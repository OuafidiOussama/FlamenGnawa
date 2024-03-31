import React from "react";
import ArticleCard from "../cards/ArticleCard";

export default function ArticleCardContainer({articles}) {
  return (
    <tbody>
      {articles.map(article=> <ArticleCard key={article._id} article={article} />)}
    </tbody>
  );
}
