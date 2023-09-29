import React, { useState } from "react";

function NewReviewForm({ allReviews, setAllReviews }) {
    
  const [newReviewData, setNewReviewData] = useState({
    restaurant: "",
    address: "",
    category: "",
    feedback: "",
    image: "",
    recommend: true,
    total: 0,
  });

  const apiUrl = "http://localhost:3001/api/reviews";

  function handleReviewInput(e) {
    setNewReviewData({
      ...newReviewData,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name, e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted")
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReviewData),
    })
      .then((resp) => resp.json())
      .then((newReview) => {
        console.log("NR", newReview)
        setNewReviewData({
          restaurant: "",
          address: "",
          category: "",
          feedback: "",
          image: "",
          recommend: true,
          total: 0,
        });
        setAllReviews([...allReviews, newReview]);
      });
    alert("Your review has been added!");
  }

  return (
    <div id="newreview">
      <form onSubmit={handleSubmit}>
        <div id="restaurant-heading">
          <strong>Add a New Restaurant Review</strong>
        </div>
        <br />
        <input
          type="text"
          name="restaurant"
          placeholder="Restaurant Name"
          onChange={handleReviewInput}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleReviewInput}
        />
        <select name="category" onChange={handleReviewInput}>
          <option value=""> Select A Food Category</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
        </select>
        <input
          type="text"
          name="feedback"
          placeholder="Feedback"
          onChange={handleReviewInput}
        />
        <input
          type="text"
          name="image"
          placeholder="Image"
          onChange={handleReviewInput}
        />
        <input
          type="number"
          name="total"
          placeholder="Meal Total"
          onChange={handleReviewInput}
        />
        <input
          type="submit"
          name="submit"
          value="Add New Review"
          className="submit"
        />
      </form>
      <img id="new-review-img" src="https://i.imgur.com/Zzjpu0j.png" />
    </div>
  );
}

export default NewReviewForm;
