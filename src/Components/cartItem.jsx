import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = { products: props.product };
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase(addProduct) {
    if (addProduct.available > addProduct.quantity) {
      addProduct.quantity += 1;
      this.setState({ products: addProduct });
    }
  }

  decrease(subProduct) {
    if (subProduct.quantity > 1 && subProduct.available > subProduct.quantity) {
      subProduct.quantity -= 1;
      this.setState({ products: subProduct });
    }
  }

  render() {
    const { products } = this.state;
    const { title, price, thumbnail, quantity, available } = products;
    console.log(available);
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{`R$ ${(quantity * price).toFixed(2)}`}</p>
        <p>{ `Disponivel em Estoque: ${available} unidade(s)`}</p>
        <p data-testid="shopping-cart-product-quantity">
          {`Qt.: ${quantity}`}
        </p>
        <button
          type="button"
          onClick={ () => this.decrease(products) }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <button
          type="button"
          onClick={ () => this.increase(products) }
          data-testid="product-increase-quantity"
        >
          +
        </button>
      </div>
    );
  }
}

CartItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CartItem;
