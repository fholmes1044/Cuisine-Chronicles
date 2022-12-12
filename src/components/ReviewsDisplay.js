import React from "react";
import ReviewTile from "./ReviewTile";
import "../index.css"


function ReviewsDisplay({allFilterResults, allReviews, setAllReviews, favoriteRestaurants, setFavoriteRestaurants}){

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
                 <h1 className="all-reviews"> Restaurant Reviews</h1>
                 <div className="row">
                {reviewsMap}
                </div>
           
        </div>
    )
}

export default ReviewsDisplay;