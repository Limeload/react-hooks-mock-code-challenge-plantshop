import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantArray, setPlant] = useState([]);
  const [searchString, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlant(data));
  }, []);

  let filterSearch = plantArray.filter((plant) =>
    plant.name.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm plantArray={plantArray} setPlant={setPlant}/>
      <Search setSearch={setSearch} />
      <PlantList plantArray={filterSearch}/>
    </main>
  );
}

export default PlantPage;
