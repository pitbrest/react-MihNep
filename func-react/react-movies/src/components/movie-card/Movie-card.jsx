import React from 'react';

function MovieCard({ imgUrl, title, year, type }) {
	return (
		<div
			className='card'
			style={{ width: '18rem' }}>
			<img
				src={imgUrl}
				className='card-img-top'
				alt={`${title} img`}
			/>
			<div className='card-body'>
				<h5 className='card-title'>{title}</h5>
				<div className='movie-info'>
					<span>{year}</span>
					<span>{type}</span>
				</div>
			</div>
		</div>
	);
}

export default MovieCard;
