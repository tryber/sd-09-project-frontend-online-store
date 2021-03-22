import React from 'react';
import PropTypes from 'prop-types';
import {
  quantityAllProductItem,
  productIncrease,
  productDecrease,
} from '../services/functions';

class ProductCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
    };

    this.btnProductIncrease = this.btnProductIncrease.bind(this);
    this.btnProductDecrease = this.btnProductDecrease.bind(this);
  }

  componentDidMount() {
    this.quantityProductCart();
  }

  btnProductIncrease(id, max) {
    this.setState((prevValue) => ({
      quantity: prevValue.quantity < max ? prevValue.quantity + 1 : max,
      totalProducts: prevValue.totalProducts + 1,
    }));

    productIncrease(id);
  }

  btnProductDecrease(id) {
    this.setState((prevValue) => ({
      quantity: prevValue.quantity > 0 ? prevValue.quantity - 1 : 0,
      totalProducts: prevValue.totalProducts > 0 ? prevValue.totalProducts - 1 : 0,
    }));

    productDecrease(id);
  }

  quantityProductCart() {
    const { eachProduct: { id } } = this.props;
    const quantity = quantityAllProductItem(id);

    this.setState({ quantity });
    return quantity;
  }

  render() {
    const { eachProduct } = this.props;
    const { id, title, price, thumbnail, availableQuantity } = eachProduct;
    const { quantity } = this.state;

    return (
      <div className="shopping-cart-item">
        <button type="button">X</button>
        <img src={ thumbnail } alt={ title } />
        <h1 data-testid="shopping-cart-product-name">{ title }</h1>
        <p>
          Unitário:
          { price }
        </p>
        <p data-testid="shopping-cart-product-quantity">
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ () => this.btnProductDecrease(id) }
          >
            -
          </button>
          { quantity }
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ () => this.btnProductIncrease(id, availableQuantity) }
          >
            +
          </button>
        </p>
        <p>
          Total:
          { price * quantity }
        </p>
      </div>
    );
  }
}

ProductCart.propTypes = {
  eachProduct: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    thumbnail: PropTypes.string,
  }),
}.isRequired;

export default ProductCart;
