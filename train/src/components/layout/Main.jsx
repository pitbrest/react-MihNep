import React, { Component } from 'react';
import './Main.css';

import { searchByTitle } from '../../api/OMDbAPI';
import { Movies } from '../Movies/Movies';
import { Preloader } from '../preloader/Preloader';
import { SearchPanel } from '../SearchPanel/SearchPanel';


export default class Main extends Component {
  state = {
    movies: null,
    searchParam: 'all',
    isLoading: true
  };

  componentDidMount() {
    this.updateMovies();
  }



  updateMovies = (title, type) => {
    this.setState({ isLoading: true });
    const { searchParam } = this.state;

    switch (searchParam) {
      case 'movie':
        searchByTitle(title, 'movies')
          .then(movies => this.setState({ movies, isLoading: false }));
        break;
      case 'series':
        searchByTitle(title, 'series')
          .then(movies => this.setState({ movies, isLoading: false }));
        break;
      default:
        searchByTitle(title, type)
          .then(movies => this.setState({ movies, isLoading: false }));
        break;
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchParam !== prevState.searchParam) {
      this.updateMovies();
    }
  }

  setSearchParam = (param) => {
    this.setState({ searchParam: param });
  };

  render() {
    const { movies, isLoading } = this.state;

    return (
      <main className='main-container container'>
        <SearchPanel
          updateMovies={this.updateMovies}
          setSearchParam={this.setSearchParam} />
        {isLoading || movies === undefined ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

