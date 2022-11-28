import React, {useState} from "react";

function Search({allReviews, setAllReviews}){
const [searchValue, setSearchValue] = useState("")
//console.log("sv", searchValue)

function handleSubmit(e){
    e.preventDefault()
    console.log("Sv", searchValue)

    const findResult = allReviews.filter((result) =>{
        return result.restaurant.toLowerCase() === searchValue.toLowerCase()
    })

    setAllReviews(findResult)
    console.log("fr", findResult)
}

const [selectedCategory, setSelectedCategory] = useState("Select An Option")

function handleCategoryChange (e){
setSelectedCategory(e.target.value)

const filterResults = allReviews.filter((review) =>{
    return review.category.toLowerCase() === e.target.value.toLowerCase()
})


//console.log("results", filterResults)
}

    return(
      <div>
        <form className="searchbar" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="search restaurants"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value)
          }}
        />
        <button type="submit">🔍</button>
      </form>

      <label>
        <strong>Select Food Category:</strong>
        <select onChange={handleCategoryChange}>
          <option value="Options" >Select An Option</option>
          <option value="breakfast" >breakfast</option>
          <option value="lunch" >lunch</option>
          <option value="dinner" >dinner</option>
        </select>
      </label>
      
      </div>
    )
}

export default Search