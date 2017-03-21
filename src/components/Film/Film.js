import React from 'react';
import './Film.css'

const Film = ({ film }) => {
  return (
    <div className="film-wrap">
      <div className="crawl">
        <p>{film.opening_crawl}</p>
        <p>{film.title}</p>
        <p>{film.release_date}</p>
      </div>
    </div>
  )
}

export default Film;
