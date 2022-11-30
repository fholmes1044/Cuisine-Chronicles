import React, {useState, useEffect} from "react"
import ReviewsDisplay from "./ReviewsDisplay"
import SearchAndFilter from "./SearchAndFilter"
import NewReviewForm from "./NewReviewForm"
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
      <SearchAndFilter handleUpdateCategory={handleUpdateCategory} allReviews={allReviews} setAllReviews={setAllReviews} setSearchDisplay={setSearchDisplay} setCategoryResults={setCategoryResults}/>
      <NewReviewForm reviewsData= {reviewsData} allReviews={allReviews} setAllReviews={setAllReviews}/>
      <ReviewsDisplay reviewsData={reviewsData} allFilterResults={allFilterResults} allReviews={allReviews} setAllReviews={setAllReviews}/>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //</div>
  );
}

export default App;
