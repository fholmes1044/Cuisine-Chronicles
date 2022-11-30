import React, {useState} from "react";

function SearchAndFilter({setSearchDisplay, handleUpdateCategory}){
const [searchValue, setSearchValue] = useState("")

function handleSubmit(e){
    e.preventDefault()
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
            
        }}>
          <option value="Options" >Select An Option</option>
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