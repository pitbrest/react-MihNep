import React, { Component } from 'react';

class SearchPanel extends Component {
  state = {
    searchValue: ''
  };

  inputHandler = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  render() {

    return (
      <div className="row" >
        <div className="input-field col s6">
          <input id="search" type="text" className="validate" placeholder='search' style={{ letterSpacing: '1.8px' }}
            value={this.state.searchValue} onChange={this.inputHandler} />
        </div>
      </div>
    );
  }
}

export { SearchPanel };