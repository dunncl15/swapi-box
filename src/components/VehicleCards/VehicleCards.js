import React from 'react';
import './VehicleCards.css'

const VehicleCard = ({ name, model, passengers, type, toggleFavorite }) => {

return (
  <article className="VehicleCard">
    <h3>{ name }</h3>
    <p>Model: { model }</p>
    <p>Passenger Limit: { passengers }</p>
    <p>Vehicle Class: { type }</p>
    <button onClick={(name) => toggleFavorite(name)}>
    Favorite
    </button>
  </article>
  )

}


export default VehicleCard;
