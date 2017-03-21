import React from 'react';
import Film from '../Film/Film';

const Buttons = ({ film, fetchData }) => {
  return (
    <div>
      <button className="cat-btn"
              onClick={(e) => fetchData(e.target.innerText.toLowerCase(), e)}>
      People
      </button>
      <button className="cat-btn"
              onClick={(e) => fetchData(e.target.innerText.toLowerCase(), e)}>
      Planets
      </button>
      <button className="cat-btn"
              onClick={(e) => fetchData(e.target.innerText.toLowerCase(), e)}>
      Vehicles
      </button>
      <Film film={film}/>
    </div>
  )
}

export default Buttons
