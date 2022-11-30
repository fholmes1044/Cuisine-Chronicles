import React, {useState, useEffect} from "react"
import { Switch, Route } from "react-router-dom";
import ReviewsDisplay from "./ReviewsDisplay"
import SearchAndFilter from "./SearchAndFilter"
import NewReviewForm from "./NewReviewForm"
import FavoriteRestaurants from "./FavoriteRestaurants";
import Home from "./Home"
import NavBar from "./NavBar";
const reviewsData = "http://localhost:3000/reviews"


function App() {
  const [allReviews, setAllReviews] = useState([])
  const [searchDisplay, setSearchDisplay] = useState("")
  const [categoryResults, setCategoryResults] = useState("Select An Option")

useEffect(() => {
    fetch(reviewsData)
        .then((data) => data.json())
        .then((reviews) => {
            setAllReviews(reviews)
        })
}, [])


const allFilterResults = allReviews
.filter((result) => {
  if(searchDisplay === "") return true 
  else if(result.restaurant.toLowerCase().includes(searchDisplay.toLowerCase())) return result
})
.filter((result) =>{
  if(categoryResults === "Options") return true
  else if (result.category.toLowerCase() === categoryResults.toLowerCase()) return result
})

function handleUpdateCategory(newCategory){
 setCategoryResults(newCategory)
}


  return (
    <div>
      <NavBar />
      <Switch>

        <Route exact path= "/NewReviewForm">
          <NewReviewForm reviewsData= {reviewsData} allReviews={allReviews} setAllReviews={setAllReviews}/>
        </Route>
        <Route exact path = "/SearchAndFilter">
          <SearchAndFilter handleUpdateCategory={handleUpdateCategory} allReviews={allReviews} setAllReviews={setAllReviews} setSearchDisplay={setSearchDisplay} setCategoryResults={setCategoryResults}/>  
        </Route>  
        <Route exact path ="/ReviewsDisplay">
          <ReviewsDisplay reviewsData={reviewsData} allFilterResults={allFilterResults} allReviews={allReviews} setAllReviews={setAllReviews}/>
        </Route>
        <Route exact path = "/FavoriteRestaurants">
          <FavoriteRestaurants />
        </Route>
        <Route exact path ="/">
          <Home />
        </Route>
      
    </Switch>  
    </div>

  );
}

export default App;
