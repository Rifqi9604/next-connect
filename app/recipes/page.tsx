"use client";

import React, { useState, useEffect } from "react";

export default function page() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecipes(data.recipes);
      });
  }, []);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>{recipe.name}</div>
      ))}
    </div>
  );
}
