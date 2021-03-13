import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Cart from '../../services/Data';
import './CardShoppingCart.css';

class CardShoppingCart extends Component {
  constructor(props) {
    super(props);
    const { quantity } = props.product;
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.state = { quantity };
  }

  increaseQuantity(quantity) {
    const { product: { availableQuantity } } = this.props;
    if (quantity >= 0 && quantity < availableQuantity) {
      this.setState({ quantity: quantity += 1 });
    }
  }

  decreaseQuantity(quantity) {
    if (quantity > 0) this.setState({ quantity: quantity -= 1 });
  }

  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    const { quantity } = this.state;
    return (
      <li className="cardShoppingCartContainer">
        <img src={ thumbnail } alt={ `imagem ${title}` } />
        <div>
          <h3 data-testid="shopping-cart-product-name">{ title }</h3>
          <p>{ price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }</p>
          <p data-testid="shopping-cart-product-quantity">
            Quantidade:
            { quantity }
          </p>
        </div>
        <button
          onClick={ () => this.increaseQuantity(quantity) }
          data-testid="product-increase-quantity"
          type="button"
        >
          +
        </button>
        <button
          onClick={ () => this.decreaseQuantity(quantity) }
          data-testid="product-decrease-quantity"
          type="button"
        >
          -
        </button>
      </li>
    );
  }
}

CardShoppingCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    availableQuantity: PropTypes.number,
  }).isRequired,
};

export default CardShoppingCart;
