import React, {useState} from "react";

function NewReviewForm({reviewsData, allReviews, setAllReviews}){
const [newReviewData, setNewReviewData] = useState({
    restaurant: "",
    address: "",
    category: "",
    feedback:"",
    image:"",
})

function handleReviewInput(e){
    setNewReviewData({
        ...newReviewData,
        [e.target.name]: e.target.value
    })
}

function handleSubmit(e){  
  e.preventDefault()
  fetch(reviewsData, {
    method: "POST",
    headers: {
     "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "restaurant" :  newReviewData.restaurant,
    "address" : newReviewData.address,
    "category" : newReviewData.category,
    "feedback" : newReviewData.feedback,
    "image" : newReviewData.image,
    "recommend": true
  }),
})
.then((data) => data.json())
.then((newReview) =>{
    setNewReviewData({
        restaurant: "",
        address: "",
        category: "",
        feedback:"",
        image:""  
    })
setAllReviews([...allReviews, newReview])
})
}

 return(
    <div className="newReview">
    <form onSubmit={handleSubmit}>
    <strong>Add a New Restaurant Review</strong>
    <br/>
        <input type="text" name = "restaurant" placeholder="Restaurant Name" onChange={handleReviewInput}/>
        <input type="text" name = "address" placeholder="Address" onChange={handleReviewInput}/>
        <input type="text" name= "category" placeholder="Category" onChange={handleReviewInput}/>
        <input type="text" name= "feedback" placeholder="Feedback" onChange={handleReviewInput}/>
        <input type="text" name= "image" placeholder="Image" onChange={handleReviewInput}/>
        <input type="submit"  name="submit"  value="Add New Review"  className="submit"/>  
    </form>
    </div>
 )
}

export default NewReviewForm;