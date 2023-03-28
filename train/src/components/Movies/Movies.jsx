import React from 'react';
import { MovieCard } from '../MovieCard/Movie-card';
import { Modal } from '../modal/Modal';
import './Movies.css';

function Movies(props) {
	const { movies } = props;

	return (
		<div className='movies-conrainer'>
			{movies ? (
				movies.map((item) => (
					<MovieCard
						key={item.imdbID}
						{...item}
					/>
				))
			) : (
				<Modal message={'Nothing found'} />
			)}
		</div>
	);
}

export { Movies };
