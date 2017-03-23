import React from 'react';
import './VehicleCards.css'

const VehicleCard = ({ name, model, passengers, vehicle_class, toggleFavorite }) => {

return (
  <article className="VehicleCard">
    <h3>{ name }</h3>
    <p>Model: { model }</p>
    <p>Passenger Limit: { passengers }</p>
    <p>Vehicle Class: { vehicle_class }</p>
    <button onClick={() => toggleFavorite(name)}>
    Favorite
    </button>
  </article>
  )

}


export default VehicleCard;
