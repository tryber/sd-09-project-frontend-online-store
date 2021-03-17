import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  getProduct(product) {
    const accumulator = { ...product };
    return accumulator;
  }

  item(listProducts) {
    const { addProduct, decrementProduct } = this.props;
    return listProducts.map((product) => (
      <div
        key={ product.id }
        className="shopping-cart-content"
      >
        <p
          data-testid="shopping-cart-product-name"
        >
          { product.title }
        </p>
        <img src={ product.thumbnail } alt={ product.thumbnail.id } />
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ () => decrementProduct(this.getProduct(product)) }
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{ product.qty }</p>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => addProduct(this.getProduct(product)) }
        >
          +
        </button>
      </div>
    ));
  }

  sameProduct(listProducts) {
    const not = -1;
    return listProducts.reduce((acc, curr) => {
      const equal = acc.findIndex((product) => product.id === curr.id);
      if (equal === not) {
        return [...acc, Object.assign(curr, { qty: 1 })];
      }
      acc[equal].qty += 1;
      return acc;
    }, []);
  }

  render() {
    const { listProduct } = this.props;
    if (listProduct.length > 0) {
      return (
        <div>
          { this.item(this.sameProduct(listProduct)) }
        </div>
      );
    }

    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }
}

ShoppingCart.propTypes = {
  listProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
  addProduct: PropTypes.func.isRequired,
  decrementProduct: PropTypes.func.isRequired,
};

export default ShoppingCart;
