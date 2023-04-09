import React, { useEffect, useState } from 'react';
import SearchPanel from '../search-panel/Search-panel';
import MoviesContainer from '../movies/Movies';
import searchByTitle from '../OMDb-API/Omdb-api';

function Main() {
	const [movies, setMovies] = useState(null);
	const [searchValue, setSearchValue] = useState('');
	const [searchOption, setSearchOption] = useState('All');

	useEffect(() => {
		searchByTitle().then((response) => {
			setMovies(response);
		});
	}, []);

	const inputSearchHandler = (e) => {
		setSearchValue(e.target.value);
	};

	return (
		<main className='container'>
			<SearchPanel
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				setSearchOption={setSearchOption}
			/>
			<MoviesContainer movies={movies} />
		</main>
	);
}

export default Main;
