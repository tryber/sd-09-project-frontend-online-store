import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.getFromLocalStorage = this.getFromLocalStorage.bind(this);
    this.renderCartItems = this.renderCartItems.bind(this);
    this.renderNoItemsMessage = this.renderNoItemsMessage.bind(this);
    this.renderPageItems = this.renderPageItems.bind(this);
    this.sumTotalItems = this.sumTotalItems.bind(this);
    this.incrementItem = this.incrementItem.bind(this);
    this.decrementItem = this.decrementItem.bind(this);

    this.state = {
      onCart: [],
    };
  }

  componentDidMount() {
    this.getFromLocalStorage();
  }

  getFromLocalStorage() {
    if (localStorage.getItem('cartItems')) {
      const items = localStorage.getItem('cartItems');
      this.setState({
        onCart: JSON.parse(items),
      });
    }
  }

  quantityStatus(product) {
    const productsCart = JSON.parse(localStorage.getItem('cartItems'));
    let status = false;
    productsCart.forEach((item) => {
      if (item.id === product.id && item.available_quantity === item.qtd) {
        status = true;
      }
    });
    return status;
  }

  sumTotalItems() {
    const { onCart } = this.state;
    return onCart
      .reduce((total, currentValue) => total + currentValue.price * currentValue.qtd, 0);
  }

  incrementItem(event) {
    const { value } = event.target;
    const { onCart } = this.state;
    onCart.forEach((item) => {
      if (item.id === value) {
        item.qtd += 1;
      }
    });
    this.setState({ onCart });
    localStorage.setItem('cartItems', JSON.stringify(onCart));
  }

  decrementItem(event) {
    const { value } = event.target;
    const { onCart } = this.state;
    onCart.forEach((item, index) => {
      if (item.id === value) {
        if (item.qtd === 1) onCart.splice(index, 1);
        else item.qtd -= 1;
      }
    });
    this.setState({ onCart });
    localStorage.setItem('cartItems', JSON.stringify(onCart));
  }

  renderCartItems() {
    const { onCart } = this.state;
    console.log(onCart);
    return onCart.map((item) => (
      <div key={ item.id } className="container-item-cart">
        <button
          value={ item.id }
          type="button"
          className="btn-delete"
        >
          X
        </button>
        <img src={ item.thumbnail } alt="item" width="50px" />
        <p data-testid="shopping-cart-product-name">{item.title}</p>
        <button
          value={ item.id }
          onClick={ this.decrementItem }
          type="button"
          className="btn-sinal"
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <span
          className="span-qtd"
          data-testid="shopping-cart-product-quantity"
        >
          {item.qtd}
        </span>
        <button
          disabled={ this.quantityStatus(item) }
          value={ item.id }
          onClick={ this.incrementItem }
          type="button"
          className="btn-sinal"
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <p>{ `R$ ${item.qtd * item.price}` }</p>
      </div>
    ));
  }

  renderNoItemsMessage() {
    return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
  }

  renderPageItems() {
    return (
      <div>
        <div className="container-title-cart">
          <img src="cart-icon.png" alt="cart-icon" width="30px" />
          <h2 className="title">Carrinho de Compras</h2>
        </div>
        { this.renderCartItems() }
        <div className="container-finish-cart">
          <p><strong>{`Valor Total da Compra: R$ ${this.sumTotalItems()}`}</strong></p>
          <Link to="/finishBuy">
            <button
              data-testid="checkout-products"
              className="btn-finish"
              type="button"
            >
              Finalizar Compra
            </button>
          </Link>
        </div>
      </div>
    );
  }

  render() {
    const { onCart } = this.state;
    return (
      <div>
        <Link to="/">Home</Link>
        {(onCart.length !== 0) && this.renderPageItems() }
        {(onCart.length === 0) && this.renderNoItemsMessage()}
      </div>
    );
  }
}

export default Cart;
