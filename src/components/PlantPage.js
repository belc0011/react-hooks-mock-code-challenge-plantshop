import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  return (
    <main>
      {(plants.length > 0) ? <NewPlantForm plants={plants} setPlants={setPlants}/> : <h2>Loading...</h2>}
      <Search plants={plants} setPlants={setPlants}/>
      <PlantList plants={plants} setPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
