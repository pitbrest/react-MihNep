import React, { useEffect, useState } from 'react';
import MovieCard from '../movie-card/Movie-card';
import Spinner from '../spinner/Spinner';
import './Movies.css';

function MoviesContainer({ movies }) {
	return !movies ? (
		<Spinner />
	) : (
		<div className='movies-container mt-5 mb-5 container-sm'>
			{movies.map((item) => (
				<MovieCard
					key={item.imdbID}
					imgUrl={item.Poster}
					title={item.Title}
					year={item.Year}
					type={item.Type}
				/>
			))}
		</div>
	);
}

export default MoviesContainer;
