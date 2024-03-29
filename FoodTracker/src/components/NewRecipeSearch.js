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
        setRecipes(data.hits);
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
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        src="https://i.imgur.com/F1ZpZVS.png"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      />
      <input
        type="text"
        placeholder="Search for recipes"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: "300px",
          height: "30px",
          border: "2px solid #000",
          marginBottom: "5px",
        }}
      />
      <button onClick={searchRecipes}>Search</button>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          listStyle: "none",
          padding: 0,
        }}
      >
        {recipes.map((recipe) => (
          <li
            key={recipe.recipe.uri}
            style={{
              width: "calc(33.33% - 10px)",
              margin: "5px",
              textAlign: "center",
            }}
          >
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <p>{recipe.recipe.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewRecipeSearch;
