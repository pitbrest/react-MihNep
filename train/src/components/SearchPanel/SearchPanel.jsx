import React, { Component } from 'react';
import './SearchPanel.css';

class SearchPanel extends Component {
  state = {
    searchValue: ''
  };

  inputHandler = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  onInputSubmit = (e) => {
    const { updateMovies } = this.props;
    const searchValue = this.state.searchValue;

    if (e.key === "Enter") {
      return searchValue.length > 2 ? (updateMovies(searchValue), this.clearSearchInput()) :
        alert('search value will have more then 2 letters');
    }
  };

  onSearchSubmit = () => {
    const { updateMovies } = this.props;
    const searchValue = this.state.searchValue;

    return searchValue.length > 2 ? (updateMovies(searchValue), this.clearSearchInput()) :
      alert('search value will have more then 2 letters');
  };

  clearSearchInput = () => {
    this.setState({ searchValue: '' });
  };

  render() {
    const searchValue = this.state.searchValue;

    return (
      <div className="row" >

        <div className="input-field col s12">
          <input id="search" type="text" className="validate" placeholder='search' style={{ letterSpacing: '1.8px' }}
            value={searchValue}
            onChange={this.inputHandler}
            onKeyDown={this.onInputSubmit}
            autoFocus />
          <button className='btn search-btn' onClick={this.onSearchSubmit}>search</button>

          <form action="#">
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" defaultChecked />
                <span>All</span>
              </label>
            </p>
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>Movies only</span>
              </label>
            </p>
            <p>
              <label>
                <input className="with-gap" name="group1" type="radio" />
                <span>Series only</span>
              </label>
            </p>
          </form>

        </div>
      </div>
    );
  }
}

export { SearchPanel };