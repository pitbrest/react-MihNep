import React, { Component } from 'react';
import './Main.css';

import { searchByTitle } from '../../api/OMDbAPI';
import { Movies } from '../Movies/Movies';


export default class Main extends Component {
  state = {
    movies: null
  };

  componentDidMount() {
    searchByTitle('sun')
      .then(movies => this.setState({ movies }));
  }

  render() {
    const { movies } = this.state;

    return (
      <main className='main-container container'>
        {!movies ? <h2 style={{ textAlign: 'center' }}>Loading ...</h2> : <Movies movies={movies} />}
      </main>
    );
  }
}

