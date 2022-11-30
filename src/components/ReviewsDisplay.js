import React, {useState} from "react";
//import FavoriteRestaurants from "./FavoriteRestaurants";
import ReviewTile from "./ReviewTile";


function ReviewsDisplay({allFilterResults, allReviews, setAllReviews}){

const [favoriteRestaurant, setfavoriteRestaurant] = useState([])

const reviewsMap = allFilterResults.map((review) =>(
<ReviewTile key={review.restaurant} review={review} handleDeletedReview={handleDeletedReview} handleUpdatedReview={handleUpdatedReview}/>
))

// function addRestaurantToFavorites(){
//     console.log("CHECK")
// //     const findValue = allReviews.find((restaurant) => restaurant.id === review.id)
// // console.log("VALUE", findValue)
//     // if(!findValue){
//     //     setfavoriteRestaurant([...favoriteRestaurant, e])
// //}

// }
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
            {/* <FavoriteRestaurants favoriteRestaurant={favoriteRestaurant} addRestaurantToFavorites={addRestaurantToFavorites}/> */}
        </div>
    )
}

export default ReviewsDisplay;