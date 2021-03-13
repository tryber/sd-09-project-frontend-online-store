import React from 'react';
import { shape, string } from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCart from './ProductCart';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.getProductsInStorage = this.getProductsInStorage.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.messageCartEmpty = this.messageCartEmpty.bind(this);
    this.renderProducts = this.renderProducts.bind(this);

    this.state = {
      cart: JSON.parse(localStorage.getItem('itens')),
    };
  }

  getProductsInStorage(cart) {
    return cart.map((item) => (
      <ProductCart key={ item.id } item={ item } deleteItem={ this.deleteItem } />
    ));
  }

  messageCartEmpty() {
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }

  deleteItem(idDeleted) {
    const cartItems = JSON.parse(localStorage.getItem('itens'));
    const newCart = cartItems.filter(({ id }) => id !== idDeleted);
    localStorage.setItem('itens', JSON.stringify(newCart));
    this.setState(({
      cart: newCart,
    }));
  }

  renderProducts() {
    const { cart } = this.state;
    return cart.length ? this.getProductsInStorage(cart) : this.messageCartEmpty();
  }

  render() {
    const { location } = this.props;
    const { state } = location;
    const { idProduct, idCategory, product } = state;
    const path = idProduct === '' || idCategory === ''
      ? '/'
      : `/details/${idCategory}/${idProduct}`;
    return (
      <section>
        <Link to={ { pathname: path, state: { product } } }>
          <button type="button">VOLTAR</button>
        </Link>
        <h1>Carrinho de Compras</h1>
        { this.renderProducts() }
        <Link to="/checkout" data-testid="checkout-products">
          Finalizar a compra
        </Link>
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  location: shape({
    state: shape({
      idCategory: string.isRequired,
      idProduct: string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ShoppingCart;
