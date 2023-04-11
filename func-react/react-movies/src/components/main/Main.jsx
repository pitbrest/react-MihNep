import React, { useEffect, useState } from 'react';
import SearchPanel from '../search-panel/Search-panel';
import MoviesContainer from '../movies/Movies';
import searchByTitle from '../OMDb-API/Omdb-api';
import Spinner from '../spinner/Spinner';
import ModalWindow from '../modal/Modal';

function Main() {
	const [movies, setMovies] = useState(null);
	const [searchValue, setSearchValue] = useState('happiness');
	const [searchOption, setSearchOption] = useState('All');

	const currentSearchOption = searchOption === 'All' ? '' : searchOption;

	useEffect(() => {
		setMovies('');
		searchByTitle(searchValue, currentSearchOption).then((result) => {
			if (result.Error) console.log(result.Error);
			setMovies(result);
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
			{!movies ? <Spinner /> : null}
			{movies && movies.Error ? <ModalWindow content={movies.Error} /> : null}
			{movies && !movies.Error ? <MoviesContainer movies={movies} /> : null}
		</main>
	);
}

export default Main;
