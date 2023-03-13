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
    searchParams: {
      all: true,
      movies: false,
      series: false
    }
  };

  searchValueHandler = (value) => {
    this.setState({ searchValue: value });
  };

  componentDidMount() {
    const searchValue = this.state.searchValue;

    searchByTitle(searchValue)
      .then(movies => this.setState({ movies }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue && this.state.searchValue.length > 2) {
      searchByTitle(this.state.searchValue)
        .then(movies => this.setState({ movies }));
    }
  }


  render() {
    const { movies } = this.state;

    return (
      <main className='main-container container'>
        <SearchPanel searchValueHandler={this.searchValueHandler} />
        {!movies ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

