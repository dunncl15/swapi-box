import React from 'react';
import './Buttons.css';

const Buttons = ({ fetchData, renderFavorites }) => {
  return (
    <div className="Buttons">
        <button
        className="cat-btn people"
        onClick={() => fetchData('people')}>
        People
        </button>
        <button
        className="cat-btn planets"
        onClick={() => fetchData('planets')}>
        Planets
        </button>
        <button
        className="cat-btn vehicles"
        onClick={() => fetchData('vehicles')}>
        Vehicles
        </button>
        <button disabled className="cat-btn favorites" onClick={() => renderFavorites('favorites')}>
        Favorites
        </button>
    </div>
  )
}

export default Buttons;
