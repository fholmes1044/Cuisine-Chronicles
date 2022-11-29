import React, {useState} from "react";

function SearchAndFilter({allReviews, setAllReviews, setSearchDisplay, setCategoryResults, handleUpdateCategory}){
const [searchValue, setSearchValue] = useState("")
const [selectedCategory, setSelectedCategory] = useState("Select An Option")


function handleSubmit(e){
    e.preventDefault()
   // console.log("Sv", searchValue)
    setSearchDisplay(searchValue)
    
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
        <select onChange={(e) => {
            handleUpdateCategory(e.target.value)
            //setCategoryResults(selectedCategory)
        }}>
          <option value="Options" >Select An Option</option>
          <option value="breakfast" >breakfast</option>
          <option value="lunch" >lunch</option>
          <option value="dinner" >dinner</option>
        </select>
      </label>
      
      </div>
    )
}

export default SearchAndFilter