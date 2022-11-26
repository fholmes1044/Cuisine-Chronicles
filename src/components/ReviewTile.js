import React from "react";

function ReviewTile({review}){
    const {restaurant, address, category, rating, image} = review
    
    return(
        <div>
            <h2>{restaurant}</h2>
            <img src={image} alt={restaurant}></img>
        </div>
    )
}

export default ReviewTile;