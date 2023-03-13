import React, { Component } from 'react';
import './SearchPanel.css';

class SearchPanel extends Component {
  state = {
    searchValue: ''
  };

  inputHandler = (e) => {
    const { searchValueHandler } = this.props;
    this.setState(() => ({ searchValue: e.target.value }), () => searchValueHandler(this.state.searchValue));
  };

  render() {

    return (
      <div className="row" >

        <div className="input-field col s12">
          <input id="search" type="text" className="validate" placeholder='search' style={{ letterSpacing: '1.8px' }}
            value={this.state.searchValue} onChange={this.inputHandler} />


          <form action="!#">  <label>
            <input class="with-gap" name="group3" type="radio" checked />
            <span>Red</span>
          </label>

            <label>
              <input class="with-gap" name="group3" type="radio" />
              <span>Red</span>
            </label>

            <label>
              <input class="with-gap" name="group3" type="radio" />
              <span>Red</span>
            </label></form>


        </div>
      </div>
    );
  }
}

export { SearchPanel };