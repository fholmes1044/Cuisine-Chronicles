import React, {useState} from "react";
import FavoriteRestaurants from "./FavoriteRestaurants";
import ReviewTile from "./ReviewTile";
import { Switch, Route, useRouteMatch} from "react-router-dom";
import "../index.css"


function ReviewsDisplay({allFilterResults, allReviews, setAllReviews, favoriteRestaurants, setFavoriteRestaurants}){



let {path} = useRouteMatch()

const reviewsMap = allFilterResults.map((review) =>{
        return(
          <ReviewTile key={review.restaurant} review={review} handleDeletedReview={handleDeletedReview} handleUpdatedReview={handleUpdatedReview} addRestaurantToFavorites={addRestaurantToFavorites}/>  
        ) 
})

function addRestaurantToFavorites(review){
    setFavoriteRestaurants([...favoriteRestaurants, review])
}
function handleDeletedReview(deletedReview){
    const updatedReviews = allReviews.filter((review) => review.id !== deletedReview.id);
    setAllReviews(updatedReviews);
}
function handleUpdatedReview(updatedReview){
    const updatedItems = allReviews.map((review) => {
        if (review.id === updatedReview.id) {
          return updatedReview;
        } else {
          return review;
        }
      });
      setAllReviews(updatedItems);
}

    return(
        <div>  
         <Switch>
            <Route exact path = {path}>
                 <h1 className="primary"> All Reviews</h1>
                 <div className="row">
                {reviewsMap}
                </div>
            </Route>
            <Route path = {`${path}/FavoriteRestaurants`}>
                <FavoriteRestaurants favoriteRestaurants={favoriteRestaurants}/>
            </Route>
        </Switch> 
           
        </div>
    )
}

export default ReviewsDisplay;