import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, poster_path, name }) => {
  const imgBaseUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;
  return (
    <div className="movie-card">
      <img src={imgBaseUrl} alt={title ? title : name} />
      <h2 className="movie-title">{title ? title : name}</h2>
    </div>
  )
}

export default MovieCard;
