import React, {useState, useEffect} from "react"
import ReviewsDisplay from "./ReviewsDisplay"
import SearchAndFilter from "./SearchAndFilter"
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

const findSearchResults = allReviews.filter((result) =>{
  if(searchDisplay === "") return true 
  else if(result.restaurant.toLowerCase().includes(searchDisplay.toLowerCase())) return result
})

const filterCategoryResults = allReviews.filter((review) =>{
  if(categoryResults === "Select An Option") return true
  else if (review.category.toLowerCase() === categoryResults.toLowerCase()) return review
})

console.log("categoryresultsfilter", filterCategoryResults)

  return (
    <div>
      <SearchAndFilter allReviews={allReviews} setAllReviews={setAllReviews} setSearchDisplay={setSearchDisplay} setCategoryResults={setCategoryResults}/>
      <ReviewsDisplay allSearchReviews={findSearchResults}/>
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
