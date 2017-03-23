import React from 'react';
import './CardContainer.css';
import PeopleCard from '../PeopleCards/PeopleCards.js';
import PlanetCard from '../PlanetCards/PlanetCards.js';
import VehicleCard from '../VehicleCards/VehicleCards.js';
import FavoriteCard from '../Favorites/Favorites.js'

const getPeople = (data, toggleFavorite) => {
  return data.map((person, i) => {
    return <PeopleCard
            toggleFavorite={toggleFavorite}
            key={i}
            name={person.name}
            homeworld={person.homeworld}
            species={person.species}
            population={person.population_of_homeworld} />
  })
}

const getPlanets = (data, toggleFavorite) => {
  return data.map((planet, i) => {
    return <PlanetCard
            toggleFavorite={toggleFavorite}
            key={i}
            name={planet.name}
            terrain={planet.terrain}
            climate={planet.climate}
            population={planet.population}
            residents={planet.residents} />
  })
}

const getVehicles = (data, toggleFavorite) => {
  return data.map((vehicle, i) => {
    return <VehicleCard
            toggleFavorite={toggleFavorite}
            key={i}
            name={vehicle.name}
            model={vehicle.model}
            passengers={vehicle.passengers}
            type={vehicle.vehicle_class} />
  })
}

// const getFavorites = (data) => {
//   return data.map((card, i) => {
//     return <FavoriteCard
//             key={i}
//             name={card.name}
//             homeworld={card.homeworld}
//             species={card.species}
//             population={card.population}
//             terrain={card.terrain}
//             climate={card.climate}
//             residents={card.residents} />
//   })
// }


const renderFavorites = (favorites) => {
  return <FavoriteCard favorites={favorites} />
}

const getCards = (selected, selectedCategory, toggleFavorite, favorites) => {
  if (selected === 'people') {
    return getPeople(selectedCategory, toggleFavorite)
  }

  if (selected === 'planets') {
    return getPlanets(selectedCategory, toggleFavorite)
  }

  if (selected === 'vehicles') {
    return getVehicles(selectedCategory, toggleFavorite)
  }

  if (selected === 'favorites') {
    return renderFavorites(favorites);
  }
}

const CardContainer = ({ selectedCategory, selected, toggleFavorite, favorites }) => {
  return (
    <div className="CardContainer">
    { getCards(selected, selectedCategory, toggleFavorite, favorites) }
    </div>
  )
}

export default CardContainer;
