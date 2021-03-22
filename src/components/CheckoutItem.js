import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/CheckoutItem.css';

class CheckoutItem extends Component {
  render() {
    const { item } = this.props;
    const { thumbnail, title, amount, price } = item;
    return (
      <div className="checkout-item-container">
        <img src={ thumbnail } alt={ title } />
        <p>{ title }</p>
        <p>{ amount }</p>
        <p>{ `R$ ${(price * amount).toFixed(2)}` }</p>
      </div>
    );
  }
}

CheckoutItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    amount: PropTypes.number,
  }).isRequired,
};

export default CheckoutItem;
