import React from 'react';
import './VehicleCards.css'

const VehicleCard = ({ name }) => {

return (
  <article className="VehicleCard">
    <h3>{name}</h3>
    <p>Model: </p>
    <p>Passenger Limit: </p>
    <p>Vehicle Class: </p>
  </article>
  )

}


export default VehicleCard;
