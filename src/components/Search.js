import React from "react";

function Search({plants, setPlants}) {

  function handleChange(e) {
    const searchInput = e.target.value.toLowerCase();
    if (searchInput) {
        setPlants(plants.filter((plant) => {
          return plant.name.toLowerCase().includes(searchInput)
        })
      )
    }
    else {
      fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(data => setPlants(data))
    }
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
