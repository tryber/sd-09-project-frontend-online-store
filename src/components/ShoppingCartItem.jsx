import React from 'react';
import PropTypes from 'prop-types';
import { handleQuantity } from '../services/dataservices';

class ShoppingCartItem extends React.Component {
  constructor(props) {
    super(props);
    this.subtractQuantity = this.subtractQuantity.bind(this);
    this.sumQuantity = this.sumQuantity.bind(this);
    const { product } = this.props;
    this.state = { counter: handleQuantity('=', product.productId) };
  }

  subtractQuantity() {
    const { product } = this.props;
    handleQuantity('-', product.productId);
    this.setState({
      counter: handleQuantity('=', product.productId),
    });
  }

  sumQuantity() {
    const { product } = this.props;
    handleQuantity('+', product.productId);
    this.setState({
      counter: handleQuantity('=', product.productId),
    });
  }

  render() {
    const { product } = this.props;
    const { image, title, price, productId } = product;
    const { counter } = this.state;
    return (
      <div data-testid="shopping-cart-product-name" key={ productId }>
        <h1>{ title }</h1>
        <img src={ image } alt={ title } />
        <p>{ price }</p>
        <p>
          Valor total:
          { price * counter }
        </p>
        <div>
          <span>Quantidade:</span>
          <button
            type="button"
            data-testid="product-decrease-quantity"
            onClick={ this.subtractQuantity }
          >
            -
          </button>
          <span data-testid="shopping-cart-product-quantity">{ counter }</span>
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ this.sumQuantity }
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

ShoppingCartItem.propTypes = {
  product: PropTypes.objectOf({
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    ProductId: PropTypes.string,
  }).isRequired,
};

export default ShoppingCartItem;
