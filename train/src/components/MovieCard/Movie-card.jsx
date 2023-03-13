import React from 'react';
import './Movie-card.css';

function MovieCard(props) {
  const { Title: title, Year: year, imdbID: id, Type: type, Poster: imgUrl } = props;

  return (
    <div className='col s2'>
      <div className="card" id={id}>
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={imgUrl !== "N/A" ? imgUrl : `https://placehold.co/293x414?text=${title}`} alt='movie-img' />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{title}</span>
          <p>{year}<span className='right'>{type}</span></p>
        </div>
      </div>
    </div>
  );
};

export { MovieCard };