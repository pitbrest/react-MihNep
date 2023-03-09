import React, { Component } from 'react';
import './Item-card.css';

class ItemCard extends Component {

  render() {
    const { imgUrl, title, content = '', link = '!#' } = this.props;

    return (
      <div class="col s2">
        <div class="card">
          <div class="card-image">
            <img src={imgUrl} alt='movie_image' />
            <span class="card-title">{title}</span>
          </div>
          <div class="card-content">
            <p>{content}</p>
          </div>
          <div class="card-action">
            <a href={link}>This is a link</a>
          </div>
        </div>
      </div>
    );
  }
};

export { ItemCard };