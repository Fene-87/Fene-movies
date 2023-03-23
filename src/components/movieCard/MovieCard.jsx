import React from 'react';

const MovieCard = ({ title, poster_path, name }) => {
  const imgBaseUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;
  return (
    <div>
      <h2>{title ? title : name}</h2>
      <img src={imgBaseUrl} alt="" />
    </div>
  )
}

export default MovieCard;
