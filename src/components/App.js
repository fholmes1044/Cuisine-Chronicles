import React, {useState, useEffect} from "react"
import ReviewsDisplay from "./ReviewsDisplay"
const reviewsData = "http://localhost:3000/reviews"

function App() {
  const [allReviews, setAllReviews] = useState([])

useEffect(() => {
    fetch(reviewsData)
        .then((data) => data.json())
        .then((reviews) => {
            setAllReviews(reviews)
        })
}, [])


console.log("allReviews", allReviews)
  return (
    <div>
      <ReviewsDisplay allReviews={allReviews}/>
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
