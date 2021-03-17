import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <section>
        <h3 data-testid="shopping-cart-product-name">{ product.title }</h3>
        <img src={ product.thumbnail } alt="Imagem do Produto" />
        <p>{ product.price }</p>
        <p data-testid="shopping-cart-product-quantity">1</p>
      </section>
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
