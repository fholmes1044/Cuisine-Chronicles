import React from "react";
import FavoriteTile from "./FavoriteTile";

function FavoriteRestaurants({favoriteRestaurants}){

const mapRestaurants = favoriteRestaurants.map((review) =>(
    <FavoriteTile key ={review.id} review={review} />
))

    return(
        <div> 
            <h1 className="all-reviews">Favorite Restaurants </h1>
                 <div className="row">
            
            {mapRestaurants}
            </div>
        </div>
    )
  
}

export default FavoriteRestaurants