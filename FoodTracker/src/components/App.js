import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import ReviewsDisplay from "./ReviewsDisplay";
import SearchAndFilter from "./SearchAndFilter";
import NewReviewForm from "./NewReviewForm";
import Home from "./Home";
import NavBar from "./NavBar";
import FavoriteRestaurants from "./FavoriteRestaurants";
import NewRecipeSearch from "./NewRecipeSearch";
const reviewsData = "http://localhost:3001/api/reviews";

function App() {
  const [allReviews, setAllReviews] = useState([]);
  const [searchDisplay, setSearchDisplay] = useState("");
  const [categoryResults, setCategoryResults] = useState("Select An Option");
  const [favoriteRestaurants, setFavoriteRestaurants] = useState([]);

  useEffect(() => {
    fetch(reviewsData)
      .then((data) => data.json())
      .then((reviews) => {
        setAllReviews(reviews);
      });
  }, []);

  const allFilterResults = allReviews.filter((result) => {
    if (searchDisplay === "" && categoryResults === "Select An Option")
      return true;

    if (result.restaurant.toLowerCase().includes(searchDisplay.toLowerCase())) {
      if (
        result.category.toLowerCase().includes(categoryResults.toLowerCase()) ||
        categoryResults === "Select An Option"
      ) {
        return true;
      }
    }
    return false;
  });

  function handleUpdateCategory(newCategory) {
    setCategoryResults(newCategory);
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/reviews/new">
          <NewReviewForm
            reviewsData={reviewsData}
            allReviews={allReviews}
            setAllReviews={setAllReviews}
          />
        </Route>

        <Route exact path="/reviews">
          <SearchAndFilter
            handleUpdateCategory={handleUpdateCategory}
            allReviews={allReviews}
            setAllReviews={setAllReviews}
            setSearchDisplay={setSearchDisplay}
            setCategoryResults={setCategoryResults}
          />
          <ReviewsDisplay
            setFavoriteRestaurants={setFavoriteRestaurants}
            favoriteRestaurants={favoriteRestaurants}
            reviewsData={reviewsData}
            allFilterResults={allFilterResults}
            allReviews={allReviews}
            setAllReviews={setAllReviews}
          />
        </Route>

        <Route exact path="/reviews/favorite">
          <FavoriteRestaurants favoriteRestaurants={favoriteRestaurants} />
        </Route>
        <Route exact path="/recipes/search">
          <NewRecipeSearch />
        </Route>
        <Route exact path="/">
          <SearchAndFilter
            handleUpdateCategory={handleUpdateCategory}
            allReviews={allReviews}
            setAllReviews={setAllReviews}
            setSearchDisplay={setSearchDisplay}
            setCategoryResults={setCategoryResults}
          />

          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
