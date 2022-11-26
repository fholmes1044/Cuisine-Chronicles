import React, {useState} from "react";

function Search({allReviews, setAllReviews}){
const [searchValue, setSearchValue] = useState("")
//console.log("sv", searchValue)

function handleSubmit(e){
    e.preventDefault()
    console.log("Sv", searchValue)

    const findResult = allReviews.filter((result) =>{
        return result.restaurant === searchValue
    })

    setAllReviews(findResult)
    console.log("fr", findResult)
}
    return(
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
    )
}

export default Search