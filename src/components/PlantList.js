import React, {useEffect, useState} from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants}) {
  

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(res => res.json())
    .then(data => setPlants(data))
  }, [])
  return (
    <ul className="cards">
      {plants.map((plant) => {
      return <PlantCard plant={plant} key={plant.id}/>})}
      </ul>
  );
}

export default PlantList;
