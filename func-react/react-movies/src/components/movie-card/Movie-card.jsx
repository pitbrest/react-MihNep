import React from 'react';
import './Movie-card.css';

function MovieCard({ imgUrl, title, year, type }) {
	return (
		<div
			className='card'
			style={{ width: '18rem' }}>
			<img
				src={
					imgUrl === 'N/A'
						? 'https://imgholder.ru/286x400/E5E4E2/474A51&text=movie+image+not+found&fz=18'
						: imgUrl
				}
				className='card-img-top'
				alt={`${title} img`}
			/>
			<div className='card-body'>
				<h5 className='card-title px-3 text-center mb-4'>{title}</h5>
				<div className='movie-info px-3'>
					<span>{year}</span>
					<span>{type}</span>
				</div>
			</div>
		</div>
	);
}

export default MovieCard;
