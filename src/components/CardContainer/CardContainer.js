import React from 'react';
import './CardContainer.css';
import PeopleCard from '../PeopleCards/PeopleCards.js'
// import PlanetCard from '../PlanetCard/PlanetCard.js'
import VehicleCard from '../VehicleCards/VehicleCards.js'

const CardContainer = ({ selectedCategory, selected }) => {

  return (
    <div className="CardContainer">
      <button>Favorites</button>
      { selected === 'people' &&
        <PeopleCard selectedCategory={selectedCategory} />
      }
      { selected === 'vehicles' &&
      <VehicleCard selectedCategory={selectedCategory} /> }
    </div>
  )
}

export default CardContainer;
