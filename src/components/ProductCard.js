import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

require('./ProductCard.css');

export default class ProductCard extends Component {
  constructor() {
    super();

    this.state = {
      redirectTo: false,
    };

    this.goToDetails = this.goToDetails.bind(this);
  }

  goToDetails(event) {
    const { keyCode, type } = event;
    const enterKeyCode = 13;

    if (type === 'keydown' && keyCode !== enterKeyCode) {
      return false;
    }

    this.setState({ redirectTo: true });
  }

  render() {
    const { product, children } = this.props;
    const {
      title,
      thumbnail,
      price,
      id,
      freeShipping,
    } = product;
    const { redirectTo } = this.state;

    if (redirectTo) {
      return (
        <Redirect
          to={ {
            pathname: `/product-details/${id}`,
            state: { ...product, product },
          } }
        />
      );
    }

    return (
      <section
        className="product-card"
      >
        <div
          data-testid="product-detail-link"
          onClick={ this.goToDetails }
          onKeyDown={ this.goToDetails }
          tabIndex="0"
          role="button"
        >
          <div data-testid="product">
            { freeShipping
              ? <span data-testid="free-shipping">Frete grátis</span>
              : null }
            <section className="title-card"><p>{ title }</p></section>
            <section className="body-card">
              <img src={ thumbnail } alt={ title } />
              <p>{ `R$ ${price}` }</p>
            </section>
          </div>
        </div>
        { children }
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    attributes: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    availableQuantity: PropTypes.number,
    freeShipping: PropTypes.bool,
  }).isRequired,
  children: PropTypes.node.isRequired,
};
