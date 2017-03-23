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

const getPlanets = (data) => {
  return data.map((planet, i) => {
    return <PlanetCard
            key={i} name={planet.name} terrain={planet.terrain} climate={planet.climate}
            population={planet.population}
            residents={planet.residents} />
  })
}

const getVehicles = (data) => {
  return data.map((vehicle, i) => {
    return <VehicleCard
            name={vehicle.name} />
  })
}

const getCards = (selected, selectedCategory) => {
  if (selected === 'people') {
    return getPeople(selectedCategory)
  }

  if (selected === 'planets') {
    return getPlanets(selectedCategory)
  }

  if (selected === 'vehicles') {
    return getVehicles(selectedCategory)
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
