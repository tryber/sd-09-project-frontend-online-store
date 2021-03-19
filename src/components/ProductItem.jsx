import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonAdd from './ButtonAdd';

export default class ProductItem extends Component {
  constructor(props) {
    super(props);
    const { title, image, price, id } = this.props;
    this.state = {
      title,
      image,
      price,
      id,
    };
  }

  render() {
    const { title, image, price, id } = this.state;
    return (
      <div data-testid="product" className="card">
        <div>
          <Link
            to={ `/product-details/${id}?title=${title}&image=${image}&price=${price}` }
            data-testid="product-detail-link"
          >
            <header>
              <p>{ title }</p>
            </header>
            <figure className="card-image">
              <img src={ image } alt="product" />
            </figure>
            <h3>{ price }</h3>
          </Link>
        </div>
        <div>
          <ButtonAdd product={ this.state } id="product-add-to-cart" />
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
