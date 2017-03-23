import React from 'react';
import './CardContainer.css';
import PeopleCard from '../PeopleCards/PeopleCards.js';
import PlanetCard from '../PlanetCards/PlanetCards.js';
import VehicleCard from '../VehicleCards/VehicleCards.js';

const getPeople = (data, toggleFavorite) => {
  return data.map((person, i) => {
    return <PeopleCard
            toggleFavorite={toggleFavorite}
            key={i}
            {...person}/>
  })
}

const getPlanets = (data, toggleFavorite) => {
  return data.map((planet, i) => {
    return <PlanetCard
            toggleFavorite={toggleFavorite}
            key={i}
            {...planet} />
  })
}

const getVehicles = (data, toggleFavorite) => {
  return data.map((vehicle, i) => {
    return <VehicleCard {...vehicle}
            toggleFavorite={toggleFavorite}
            key={i} />
  })
}

const renderFavorites = (favorites, toggleFavorite) => {
  return favorites.map((card, i) => {
    if (card.terrain) {
      return <PlanetCard
              toggleFavorite={toggleFavorite}
              key={i}
              {...card}/>
    }
    if (card.homeworld){
      return <PeopleCard
              toggleFavorite={toggleFavorite}
              key={i}
              {...card} />
    }
    if(card.model) {
      return <VehicleCard
              toggleFavorite={toggleFavorite}
              key={i}
              {...card}/>
    }
  })
}

const getCards = (selected, selectedCategory, toggleFavorite, favorites) => {
  switch (selected) {
    case 'people':
      return getPeople(selectedCategory, toggleFavorite);
      break;
    case 'planets':
      return getPlanets(selectedCategory, toggleFavorite);
      break;
    case 'vehicles':
      return getVehicles(selectedCategory, toggleFavorite);
      break;
    case 'favorites':
      return renderFavorites(favorites, toggleFavorite);
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
