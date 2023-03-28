import React, { Component } from 'react';
import './Main.css';

import { searchByTitle } from '../../api/OMDbAPI';
import { Movies } from '../Movies/Movies';
import { Preloader } from '../preloader/Preloader';
import { SearchPanel } from '../SearchPanel/SearchPanel';

export default class Main extends Component {
	state = {
		searchValue: 'happiness',
		searchParam: 'all',
		movies: null,
		isLoading: true,
	};

	componentDidMount() {
		this.updateMovies();
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			this.state.searchValue !== prevState.searchValue ||
			this.state.searchParam !== prevState.searchParam
		) {
			this.updateMovies();
		}
	}

	updateMovies = () => {
		this.setState({ isLoading: true });
		const { searchValue, searchParam } = this.state;

		switch (searchParam) {
			case 'movie':
				searchByTitle(searchValue, 'movie').then((movies) =>
					this.setState({ movies, isLoading: false })
				);
				break;
			case 'series':
				searchByTitle(searchValue, 'series').then((movies) =>
					this.setState({ movies, isLoading: false })
				);
				break;
			default:
				searchByTitle(searchValue).then((movies) =>
					this.setState({ movies, isLoading: false })
				);
				break;
		}
	};

	setSearchValue = (value) => {
		this.setState({ searchValue: value });
	};
	setSearchParam = (param) => {
		this.setState({ searchParam: param });
	};

	render() {
		const { movies, isLoading } = this.state;

		return (
			<main className='main-container container'>
				<SearchPanel
					setSearchValue={this.setSearchValue}
					setSearchParam={this.setSearchParam}
				/>
				<div className='container'>
					{isLoading ? <Preloader /> : <Movies movies={movies} />}
				</div>
			</main>
		);
	}
}
