import NotFound from "@/app/recipes/[id]/not-found";
import React from "react";

interface UrlRecipeParams {
  params: {
    id: number;
  };
}

async function getRecipeFromId(id: number) {
  // 1 adalah parameter func getRecipeById
  const res = await fetch(`https://dummyjson.com/recipes/${id}`); // 123 => undefined
  if (!res.ok) return null;

  const data = await res.json();

  // Cek apakah API mengembalikan message error
  if (data?.message?.includes("not found")) return null;

  return data;
}

export default async function page({ params }: UrlRecipeParams) {
  const recipeData = await getRecipeFromId(params.id); // 123 => null

  if (!recipeData) {
    return <NotFound />;
  }

  return <div>{recipeData.name}</div>;
}
