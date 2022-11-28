import React from "react";

function ReviewTile({review}){
    const {restaurant, address, category, rating, image} = review
    
    return(
        <div>
            <h2>{restaurant}</h2>
            <h4> Address: {address}</h4>
            <img src={image} alt={restaurant}></img>
            <p>Category : {category}</p>
            <p>Rating : {rating} </p>

        </div>
    )
}

export default ReviewTile;