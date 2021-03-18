import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    const { title, image, price } = this.props;
    this.state = {
      title,
      image,
      price,
      id,
    };
  }

  handleClick() {
    const states = this.state;
    Object.entries(states).map((state) => localStorage.setItem(state[0], state[1]));
    localStorage.setItem('quantity', 1);
  }

  render() {
    const { title, image, price, id } = this.state;
    return (
      <div data-testid="product" className="card">
        <header>
          <p>{ title }</p>
        </header>
        <figure className="card-image">
          <img src={ image } alt="product" />
        </figure>
        <div>
          <h3>{ price }</h3>
          <button
            type="button"
            className="card-button"
            data-testid="product-add-to-cart"
            onClick={ this.handleClick }
          >
            <Link
              to="/ShoppingCart"
              type="submit"
            >
              Add to card
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
