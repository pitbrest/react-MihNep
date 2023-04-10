import React, { useEffect, useState } from 'react';
import SearchPanel from '../search-panel/Search-panel';
import MoviesContainer from '../movies/Movies';
import searchByTitle from '../OMDb-API/Omdb-api';

function Main() {
	const [movies, setMovies] = useState(null);
	const [searchValue, setSearchValue] = useState('happiness');
	const [searchOption, setSearchOption] = useState('All');

	const currentSearchOption = searchOption === 'All' ? '' : searchOption;

	useEffect(() => {
		setMovies('');
		searchByTitle(searchValue, currentSearchOption).then((response) => {
			setMovies(response);
		});
	}, [searchValue, currentSearchOption]);

	return (
		<main className='container'>
			<SearchPanel
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				searchOption={searchOption}
				setSearchOption={setSearchOption}
			/>
			<MoviesContainer movies={movies} />
		</main>
	);
}

export default Main;
