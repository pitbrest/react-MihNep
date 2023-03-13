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

          <form action="#">
            <p>
              <label>
                <input class="with-gap" name="group1" type="radio" defaultChecked />
                <span>All</span>
              </label>
            </p>
            <p>
              <label>
                <input class="with-gap" name="group1" type="radio" />
                <span>Movies only</span>
              </label>
            </p>
            <p>
              <label>
                <input class="with-gap" name="group1" type="radio" />
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