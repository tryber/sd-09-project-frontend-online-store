import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonCart from './shopping_cart/ButtonCart';
import ArrowBack from './shopping_cart/logo_arrow_back.svg';
import ReviewForm from './reviews/ReviewForm';

class ProductDetailed extends Component {
  constructor(props) {
    super(props);
    this.handleAddCart = this.handleAddCart.bind(this);
  }

  handleAddCart() {
    /** Source: https://stackoverflow.com/questions/40203350/getting-all-items-of-one-group-from-webstorage */
    const { location } = this.props;
    const { product } = location.state;
    const cartData = {
      items: [],
    };

    if (localStorage.getItem('cart')) {
      cartData.items = JSON.parse(localStorage.getItem('cart')).items;
    }
    cartData.items.push(product);

    localStorage.setItem('cart', JSON.stringify(cartData));
  }

  render() {
    const { location } = this.props;
    const { product } = location.state;
    return (
      <section>
        <Link to="/">
          <img src={ ArrowBack } alt="logo arrow back" />
        </Link>
        <Link to="/ShoppingCart">
          <ButtonCart />
        </Link>
        <section>
          <img src={ product.thumbnail } alt="Imagem do Produto" />
          <h3 data-testid="product-detail-name">{ product.title }</h3>
          <p>{ product.price }</p>
        </section>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ this.handleAddCart }
        >
          Adicionar ao Carrinho
        </button>
        <ReviewForm productID={ product.id } />
      </section>
    );
  }
}

ProductDetailed.propTypes = {
  match: PropTypes.string,
}.isRequired;

export default ProductDetailed;
