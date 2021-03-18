import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/pages/ShoppingCart.css';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.renderShoppingCart = this.renderShoppingCart.bind(this);
    this.productIncrease = this.productIncrease.bind(this);
    this.productDecrease = this.productDecrease.bind(this);
    this.state = {
      shoppingCart: props.shoppingCart,
    };
  }

  functionToRemoveObject(shoppingCart, obj) {
    const indexOfObjectToRemove = shoppingCart.filter((cartObj) => cartObj.id !== obj.id);
    return indexOfObjectToRemove;
  }

  productIncrease(product) {
    const { shoppingCart } = this.state;
    const newCart = shoppingCart.map((obj) => {
      if (obj.id === product.id && obj.available_quantity > obj.quantity) {
        obj.quantity += 1;
      }
      return obj;
    });
    this.setState({ shoppingCart: newCart });
  }

  productDecrease(product) {
    const { shoppingCart } = this.state;
    let newCart = shoppingCart.map((obj) => {
      if (obj.id === product.id && obj.quantity > 0) {
        obj.quantity -= 1;
      }
      return obj;
    });
    if (product.quantity <= 0) {
      newCart = this.functionToRemoveObject(shoppingCart, product);
    }
    this.setState({ shoppingCart: newCart });
  }

  renderShoppingCart() {
    const { shoppingCart } = this.state;
    if (shoppingCart.length === 0) {
      return (
        <span className="textOfEmptyCart" data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </span>
      );
    }

    return shoppingCart.map((product) => (
      <div className="cartProduct" key={ Math.random() }>
        <img src={ product.thumbnail } alt={ product.title } />
        <button
          type="button"
          onClick={ () => this.functionToRemoveObject(shoppingCart, product) }
        >
          x
        </button>
        <span data-testid="shopping-cart-product-name">{ product.title }</span>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => this.productDecrease(product) }
        >
          -
        </button>
        <span data-testid="shopping-cart-product-quantity">{ product.quantity }</span>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => this.productIncrease(product) }
        >
          +
        </button>
      </div>
    ));
  }

  render() {
    const { shoppingCart } = this.state;
    const { getCheckout } = this.props;
    return (
      <div>
        <div className="selectedItems">
          { this.renderShoppingCart() }
        </div>
        <Link
          to="/checkout"
          data-testid="checkout-products"
          onClick={ () => getCheckout(shoppingCart) }
        >
          Checkout
        </Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
}.isRequired;

export default ShoppingCart;
