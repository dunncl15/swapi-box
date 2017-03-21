import React from 'react';
import Film from '../Film/Film';

import './Buttons.css';

const Buttons = ({ film, fetchData }) => {
  return (
    <div>
      <button className="cat-btn"
              onClick={(e) => fetchData('people', e)}>
      People
      </button>
      <button className="cat-btn"
              onClick={(e) => fetchData('planets', e)}>
      Planets
      </button>
      <button className="cat-btn"
              onClick={(e) => fetchData('vehicles', e)}>
      Vehicles
      </button>
      <Film film={film}/>
    </div>
  )
}

export default Buttons
