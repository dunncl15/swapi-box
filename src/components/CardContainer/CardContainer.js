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

const getVehicle = (data) => {

  return data.map((vehicle, i) => {
    console.log(vehicle.name)
    return <VehicleCard
            key={i}
            name={vehicle.name}
            model={vehicle.model}
            passenger={vehicle.passengers}
            classCar={vehicle.vehicle_class} />
  })
}

const getCards = (selected, selectedCategory) => {
  if (selected === 'people') {
    return getPeople(selectedCategory)
  } if (selected === 'vehicles') {
    return getVehicle(selectedCategory)
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
