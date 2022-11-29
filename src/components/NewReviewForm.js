import React from "react";

function NewReviewForm(){

 return(
    <div className="newReview">
    <form>
    <strong>Add a New Restaurant Review</strong>
    <br/>
        <input type="text" placeholder="Restaurant Name"/>
        <input type="text" placeholder="Address"/>
        <input type="text" placeholder="Category"/>
        <input type="text" placeholder="Rating"/>
        <input type="text" placeholder="Image"/>
        <button>Add New Review</button>
    </form>
    </div>
 )
}

export default NewReviewForm;