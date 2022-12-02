import React from "react";

function FavoriteTile({review}){
    const {restaurant, address, category, feedback, image} = review
    return(
        <div>
            <h2>{restaurant}</h2>
            <h4> Address: {address}</h4>
            <img src={image} alt={restaurant}></img>
            <p>Category : {category}</p>
            <p>Feedback : {feedback} </p>
        </div>
    )
}

export default FavoriteTile