import React, {useState} from "react";

function NewReviewForm({reviewsData, allReviews, setAllReviews}){
const [newReviewData, setNewReviewData] = useState({
    resturant: "",
    address: "",
    category: "",
    rating:"",
    image:""
})

function handleReviewInput(e){
    setNewReviewData({
        ...newReviewData,
        [e.target.name]: e.target.value
    })
}

function handleSubmit(e){
  console.log(reviewsData)  
e.preventDefault()
fetch(reviewsData, {
    method: "POST",
    headers: {
     "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "restaurant" :  newReviewData.resturant,
    "address" : newReviewData.address,
    "category" : newReviewData.category,
    "rating" : newReviewData.rating,
    "image" : newReviewData.image
  }),
})
.then((data) => data.json())
.then((newReview) =>{
    setNewReviewData({
        resturant: "",
        address: "",
        category: "",
        rating:"",
        image:""  
    })
setAllReviews([...allReviews, newReview])
})
}
//console.log("NEW", newReviewData)
 return(
    <div className="newReview">
    <form onSubmit={handleSubmit}>
    <strong>Add a New Restaurant Review</strong>
    <br/>
        <input type="text" name = "Restaurant" placeholder="Restaurant Name" onChange={handleReviewInput}/>
        <input type="text" name = "address" placeholder="Address" onChange={handleReviewInput}/>
        <input type="text" name= "category" placeholder="Category" onChange={handleReviewInput}/>
        <input type="text" name= "rating" placeholder="Rating" onChange={handleReviewInput}/>
        <input type="text" name= "image" placeholder="Image" onChange={handleReviewInput}/>
        <input
          type="submit"  name="submit"  value="Add New Review"  className="submit"
        />
        
    </form>
    </div>
 )
}

export default NewReviewForm;