import React, {useState} from "react";

function ReviewTile({review, handleDeletedReview, handleUpdatedReview, addRestaurantToFavorites}){
    const {restaurant, address, category, feedback, image, id, recommend} = review
    const [recommendStatus, setRecommendStatus] = useState(recommend)
    const [favoriteRestaurants, setfavoriteRestaurants] = ([])

   
    function handleFavoritesClick (){
      addRestaurantToFavorites(review)
       // console.log("Favorite", review)
    }

    function handleDeleteClick(){
        fetch(`http://localhost:3000/reviews/${id}`,{
            method: "DELETE",
        })
        .then((data) => data.json())
        .then(() => handleDeletedReview(review))
    }
    
    function handleRecommendClick(){
        //const newStatus = !recommend
        setRecommendStatus((recommendStatus) => !recommendStatus)
        fetch(`http://localhost:3000/reviews/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify({
                recommend: !recommendStatus,
              }),
        })
        .then((data) => data.json())
        .then((updatedReview) => handleUpdatedReview(updatedReview))
    }
    return(
        <div>
            <h2>{restaurant}</h2>
            <h4> Address: {address}</h4>
            <img src={image} alt={restaurant}></img>
            <p>Category : {category}</p>
            <p>Feedback : {feedback} </p>
            <button className="delete-btn" onClick={handleDeleteClick}> Remove Review</button>
            <br/>
            <button className={recommendStatus ? "recommend-btn" : "doNotRecommend-btn"} onClick={handleRecommendClick}> {recommendStatus ? "Recommend" : "Do Not Recommend"}</button>
            <br/>
            <button className="favorites-btn" onClick={handleFavoritesClick}> Add to Favorites </button>
        </div>
    )
}

export default ReviewTile;