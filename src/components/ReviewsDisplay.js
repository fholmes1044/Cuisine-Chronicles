import React from "react";
import ReviewTile from "./ReviewTile";

function ReviewsDisplay({allReviews}){
const reviewsMap = allReviews.map((review) =>(
<ReviewTile key={review.restaurant} review={review}/>
))

    return(
        <div>
            <h1> All Reviews</h1>
            {reviewsMap}
            
        </div>
    )
}

export default ReviewsDisplay;