import React from "react";
import ReviewTile from "./ReviewTile";


function ReviewsDisplay({allFilterResults, allReviews, setAllReviews}){

const reviewsMap = allFilterResults.map((review) =>(
<ReviewTile key={review.restaurant} review={review} handleDeletedReview={handleDeletedReview} handleUpdatedReview={handleUpdatedReview}/>
))

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
            
            <h1> All Reviews</h1>
            {reviewsMap}
            
        </div>
    )
}

export default ReviewsDisplay;