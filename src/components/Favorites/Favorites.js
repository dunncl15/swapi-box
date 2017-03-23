import React from 'react';

const FavoriteCard = ({ favorites }) => {
  const cards = favorites.map((card) =>
    <div>{ card }</div>
  );
  return (
    <div>
      { cards }
    </div>
  )
}

export default FavoriteCard;
