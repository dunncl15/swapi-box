import React from 'react';
import './CardContainer.css';
import PeopleCard from '../PeopleCard/PeopleCard.js'
import PlanetCard from '../PlanetCard/PlanetCard.js'
import VehicleCard from '../VehicleCard/VehicleCard.js'

const CardContainer = ({ selectedCategory }) => {

  return (
    <div className="CardContainer">
      <button>Favorites</button>
      <PeopleCard selectedCategory={selectedCategory} />
    </div>
  )
}

export default CardContainer;
