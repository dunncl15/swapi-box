import React from 'react';
import './Film.css'

const Film = ({ film }) => {
  return (
    <div className="film-wrap">
      <div className="crawl">
        <p className="opening">{film.opening_crawl}</p>
        <p className="title">{film.title}</p>
        <p className="date">{film.release_date}</p>
      </div>
    </div>
  )
}

export default Film;
