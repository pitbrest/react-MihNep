import React, { Component } from 'react';
import './Main.css';

import { searchByTitle } from '../../api/OMDbAPI';
import { Movies } from '../Movies/Movies';
import { Preloader } from '../preloader/Preloader';
import { SearchPanel } from '../SearchPanel/SearchPanel';


export default class Main extends Component {
  state = {
    movies: null,
    searchValue: 'sun',
    searchParam: 'All'
  };

  componentDidMount() {
    this.updateMovies();
  }

  updateMovies = (searchValue) => {
    searchByTitle(searchValue)
      .then(movies => this.setState({ movies }));
  };

  render() {
    const { movies } = this.state;

    return (
      <main className='main-container container'>
        <SearchPanel updateMovies={this.updateMovies} />
        {!movies ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

