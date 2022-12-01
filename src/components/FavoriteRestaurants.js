import React from "react";
import ReviewTile from "./ReviewTile";

function FavoriteRestaurants({favoriteRestaurants}){
    console.log("FAVS", favoriteRestaurants)
const mapRestaurants = favoriteRestaurants.map((review) =>(
    <ReviewTile key ={review.id} review={review} />
))
console.log("MAP", mapRestaurants)
    return(
        <div>
        
These are great!

        </div>
    )
  
}

export default FavoriteRestaurants