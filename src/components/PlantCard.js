import React, {useState} from "react";


function PlantCard({plant}) {
  const [isStock, setIsStock] = useState(true);
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isStock ? (
        <button onClick={() => setIsStock(false)} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
