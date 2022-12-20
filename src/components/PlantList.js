import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantArray}) {
  return (
    <ul className="cards">
      {plantArray.map((plant) => (
      <PlantCard plant ={plant}/>
      ))}
    </ul>
  );
}

export default PlantList;
