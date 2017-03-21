import React from 'react';
import Film from '../Film/Film';

import './Buttons.css';

const Buttons = ({ film, fetchData }) => {
  return (
    <div>
      <button className="cat-btn"
              onClick={() => fetchData('people')}>
      People
      </button>
      <button className="cat-btn"
              onClick={() => fetchData('planets')}>
      Planets
      </button>
      <button className="cat-btn"
              onClick={() => fetchData('vehicles')}>
      Vehicles
      </button>
      <Film film={film}/>
    </div>
  )
}

export default Buttons
