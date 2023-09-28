import React, {useState} from "react";
// import "../index.css"

function ReviewTile({review, handleDeletedReview, handleUpdatedReview, addRestaurantToFavorites}){
    const {restaurant, address, category, feedback, image, id, recommend, total} = review
    const [recommendStatus, setRecommendStatus] = useState(recommend)
  
    function handleDeleteClick(){
        fetch(`http://localhost:3001/api/reviews/${id}`,{
            method: "DELETE",
        })
        .then((data) => data.json())
        .then(() => handleDeletedReview(review))
    }
    
    function handleRecommendClick(){
        
        setRecommendStatus((recommendStatus) => !recommendStatus)
        fetch(`http://localhost:3001/api/reviews/${id}`,{
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
        <div className="container" >
         
          <div className="column">
            <div className="card">
                <h2 className="h2">{restaurant}</h2>
                <h4> Address: {address}</h4>
                <img src={image} alt={restaurant} className="img-tile"></img>
                <p>Category : {category}</p>
                <p>Feedback : {feedback} </p>
                <p>Recommendation Status:    
                <button className={recommendStatus ? "recommend-btn" : "doNotRecommend-btn"} onClick={handleRecommendClick}> {recommendStatus ? <strong>Recommend</strong>: <strong> Do Not Recommend</strong>}</button>
                <p>Meal Total: ${total} </p>
                </p>
                <button className="favorites-btn" onClick={() =>{
                    addRestaurantToFavorites(review)
                    alert("This restaurant is added to your favorites!")
                }}> Add to Favorites </button>
                
               <br/>
               <br/>
                <button className="delete-btn" onClick={handleDeleteClick}> Remove Review</button>
                
           </div>
        
     </div>   
    </div>
    )
}

export default ReviewTile;