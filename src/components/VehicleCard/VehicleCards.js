import React from 'react';
import './VehicleCard.css'

const VehicleCard = ({ name, model, passenger, classCar }) => {
  return (
    <article className="VehicleCard">
      <h3>{name}</h3>
      <p>Model: {model}</p>
      <p>Passenger Limit: {passenger}</p>
      <p>Vehicle Class: {classCar}</p>
    </article>
  )
}

export default VehicleCard;
