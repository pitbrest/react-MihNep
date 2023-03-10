import React, { Component } from 'react';
import { ItemCard } from '../ItemCard/ItemCard';
import { searchByTitle } from '../../api/OMDbAPI';
import './Main.css';


export default class Main extends Component {
  state = {
    data: null,
    error: false
  };

  componentDidMount() {
    this.setState({ isLoading: true });
    searchByTitle('sun')
      .then(data => {
        this.setState({ data, isLoading: false });
      });

  }

  render() {
    const { data } = this.state;

    if (!data) {
      return <div style={{ textAlign: 'center' }}>Loading ...</div>;
    }

    return (
      <main className='main-container'>
        <div className="cards-conrainer">
          {data.map(item => {
            const { Title, Poster } = item;
            return (
              <ItemCard title={Title} imgUrl={Poster} />);
          })}
        </div>
      </main>
    );
  }
}

