import React from 'react';
import { MovieCard } from '../MovieCard/Movie-card';
import './Movies.css';

function Movies(props) {
  const { movies } = props;

  return (
    <div className="movies-conrainer">
      {movies.map(item => <MovieCard key={item.imdbID} {...item} />)}
    </div>
  );
}

export { Movies };