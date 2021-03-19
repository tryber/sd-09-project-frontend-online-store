import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import './CartProduct.css';

class CartProduct extends React.Component {
  render() {
    const { product, addItem, subtractItem } = this.props;
    return (
      <div className="cart-product-container">
        <button
          type="button"
          className="cart-button"
        >
          <RiCloseCircleLine />
        </button>
        <img className="cart-img" src={ product.product.thumbnail } alt="" />
        <p data-testid="shopping-cart-product-name">{ product.product.title }</p>
        <button
          type="button"
          onClick={ () => subtractItem(product) }
          className="cart-button"
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <span data-testid="shopping-cart-product-quantity">{ product.quantity }</span>
        <button
          type="button"
          onClick={ () => addItem(product) }
          className="cart-button"
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <p>{ `R$ ${product.product.price}` }</p>
      </div>
    );
  }
}

CartProduct.propTypes = {
  product: PropTypes.shape({
    product: PropTypes.shape(),
    quantity: PropTypes.number,
  }).isRequired,
  addItem: PropTypes.func.isRequired,
  subtractItem: PropTypes.func.isRequired,
};

export default CartProduct;
