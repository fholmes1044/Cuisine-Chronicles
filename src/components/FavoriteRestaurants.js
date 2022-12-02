import React from "react";
import FavoriteTile from "./FavoriteTile";

function FavoriteRestaurants({favoriteRestaurants}){

const mapRestaurants = favoriteRestaurants.map((review) =>(
    <FavoriteTile key ={review.id} review={review} />
))

    return(
        <div> 
            These are great!
            {mapRestaurants}
        </div>
    )
  
}

export default FavoriteRestaurants