import React, {useState} from "react";

function SearchAndFilter({setSearchDisplay, handleUpdateCategory}){
const [searchValue, setSearchValue] = useState("")

function handleSubmit(e){
    e.preventDefault()
    setSearchDisplay(searchValue)  
    setSearchValue("")
    alert("You can now view your searched restaurant") 
}

    return(
      <div>
        
        <form className="searchbar" onSubmit={handleSubmit}>
        <strong>Find a Restaurant: </strong>
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
        <strong>Select Food Category: </strong>
        <select onChange={(e) => {
            handleUpdateCategory(e.target.value)
            
        }}>
          <option value="Select An Option" >Select An Option</option>
          <option value="breakfast" >breakfast</option>
          <option value="lunch" >lunch</option>
          <option value="dinner" >dinner</option>
          <option value="dessert"> dessert</option>
        </select>
      </label>
      
      </div>
    )
}

export default SearchAndFilter