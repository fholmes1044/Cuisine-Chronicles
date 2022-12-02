import React from "react";
//import ReviewTile from "./ReviewTile";
import FavoriteTile from "./FavoriteTile";

function FavoriteRestaurants({favoriteRestaurants}){
    //console.log("FAVS", favoriteRestaurants)
const mapRestaurants = favoriteRestaurants.map((review) =>(
    <FavoriteTile key ={review.id} review={review} />
))
//console.log("MAP", mapRestaurants)
    return(
        <div>
        
These are great!
{mapRestaurants}
        </div>
    )
  
}

export default FavoriteRestaurants