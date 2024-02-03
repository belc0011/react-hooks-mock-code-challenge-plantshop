import React, {useState} from "react";

function NewPlantForm({plants, setPlants}) {
  console.log(plants.length)
  const [newPlant, setNewPlant] = useState({
    id: -1,
    name: "",
    image: "",
    price: 0
  })
  
  function handleSubmit(event) {
    event.preventDefault();
    setNewPlant((prevState) => (
      {...prevState, "id": plants.length + 1}
    ))
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(data => setPlants([...plants, newPlant]))
    .catch(error => console.log("error", error))
  }

  function handleInputChange(e) {
    console.log(e.target.value)
    setNewPlant((prevState) => (
      {...prevState, "name": e.target.value})
    )
  }

  function handleImageChange(e) {
    console.log(e.target.value)
    setNewPlant((prevState) => (
      {...prevState, "image": e.target.value})
    )
  }

  function handlePriceChange(e) {
    console.log(e.target.value)
    setNewPlant((prevState) => (
      {...prevState, "price": e.target.value})
    )
  }

  console.log(newPlant)
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={handleInputChange}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleImageChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={handlePriceChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
