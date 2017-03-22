import React from 'react';
import './CardContainer.css';
import PeopleCard from '../PeopleCards/PeopleCards.js'
import PlanetCard from '../PlanetCards/PlanetCards.js'
import VehicleCard from '../VehicleCards/VehicleCards.js'

const getPeople = (data) => {

  return data.map((person, i) => {
    return <PeopleCard
            key={i}
            name={person.name}
            homeworld={person.homeworld} species={person.species}
            population={person.population_of_homeworld} />
  })
}

const getCards = (selected, selectedCategory) => {
  if (selected === 'people') {
    return getPeople(selectedCategory)
  }
}

const CardContainer = ({ selectedCategory, selected }) => {

  return (
    <div className="CardContainer">
      <button>Favorites</button>      
    { getCards(selected, selectedCategory) }

    </div>
  )
}

export default CardContainer;
