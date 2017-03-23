import React from 'react';
import './VehicleCard.css'

const VehicleCard = ({ name, model, passenger, classCar }) => {
  return (
    <article className="VehicleCard">
      <h3>{name}</h3>
      <p>Model: {model}</p>
      <p>Passenger Limit: {passenger}</p>
      <p>Vehicle Class: {classCar}</p>

      <button className="favorite">Favorite</button>
    </article>
  )
}

export default VehicleCard;
