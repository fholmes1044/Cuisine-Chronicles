import React, {useState} from "react";

function NewReviewForm({reviewsData, allReviews, setAllReviews}){
const [newReviewData, setNewReviewData] = useState({
    restaurant: "",
    address: "",
    category: "",
    feedback:"",
    image:"",
    recommend: true
});

const apiUrl = 'http://localhost:3001/api/reviews'; 


function handleReviewInput(e){
    setNewReviewData({
        ...newReviewData,
        [e.target.name]: e.target.value
    })
}

function handleSubmit(e){  
  e.preventDefault()
  fetch(apiUrl, {
    method: "POST",
    headers: {
     "Content-Type": "application/json"
  },
  body: JSON.stringify(newReviewData),
})
.then((resp) => resp.json())
.then((newReview) =>{
    setNewReviewData({
        restaurant: "",
        address: "",
        category: "",
        feedback:"",
        image:"" , 
        recommend: true
    })
setAllReviews([...allReviews, newReview])
})
alert ( "Your review has been added! View the Reviews Tab.");
}

 return(
    <div id="newreview">
    <form onSubmit={handleSubmit}>
    <div id="restaurant-heading"><strong>Add a New Restaurant Review</strong></div>
    <br/>
        <input type="text" name = "restaurant" placeholder="Restaurant Name" onChange={handleReviewInput}/>
        <input type="text" name = "address" placeholder="Address" onChange={handleReviewInput}/>
        <input type="text" name= "category" placeholder="Category" onChange={handleReviewInput}/>
        <input type="text" name= "feedback" placeholder="Feedback" onChange={handleReviewInput}/>
        <input type="text" name= "image" placeholder="Image" onChange={handleReviewInput}/>
        <input type="submit"  name="submit"  value="Add New Review"  className="submit"/>  
    </form>
    <img id = "new-review-img" src="https://i.imgur.com/Zzjpu0j.png"/>
    </div>
 )
}

export default NewReviewForm;