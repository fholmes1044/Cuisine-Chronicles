import React, { useState, useEffect } from "react";

function NewRecipeSearch() {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const apiKey = process.env.REACT_APP_EDAMAM_API_KEY;
  const appId = "dd219920";

  const searchRecipes = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${searchQuery}&app_id=${appId}&app_key=${apiKey}`
      );

      if (response.ok) {
        const data = await response.json();
        console.log("data", data)
        setRecipes(data.hits);
        console.log(recipes)
      } else {
        console.error("Error fetching recipes");
      }
    } catch (error) {
      console.error("Error fetching recipes", error);
    }
  };

  useEffect(() => {
    console.log("Updated recipes:", recipes); 
  }, [recipes]); 
  

  useEffect(() => {
    if (searchQuery) {
      searchRecipes();
    }
  }, [searchQuery]);

  return (
    <div>
      <h1>Find Recipes</h1>
      <input
        type="text"
        placeholder="Search for recipes"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={searchRecipes}>Search</button>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.recipe.uri}>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <p>{recipe.recipe.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewRecipeSearch;
