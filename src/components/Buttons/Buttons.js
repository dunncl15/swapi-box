import React from 'react';
import './Buttons.css';

const Buttons = ({ fetchData, renderFavorites }) => {
  return (
    <div className="Buttons">
        <button
        className="cat-btn"
        onClick={() => fetchData('people')}>
        People
        </button>
        <button
        className="cat-btn"
        onClick={() => fetchData('planets')}>
        Planets
        </button>
        <button
        className="cat-btn"
        onClick={() => fetchData('vehicles')}>
        Vehicles
        </button>
        <button className="cat-btn" onClick={() => renderFavorites('favorites')}>
        Favorites
        </button>
    </div>
  )
}

export default Buttons;
