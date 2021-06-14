import '../components/styles/style.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartProducts: [],
    };

    this.getProdutsInLocalStorage = this.getProdutsInLocalStorage.bind(this);
    this.hasProducts = this.hasProducts.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleSubClick = this.handleSubClick.bind(this);
  }

  componentDidMount() {
    this.getProdutsInLocalStorage();
  }

  handleAddClick(product) {
    const itemsInCart = JSON.parse(localStorage.getItem('NoMasterCart'));
    console.log(itemsInCart);
    if (!itemsInCart) {
      product = { ...product, quantityToOrder: 1 };
      localStorage.setItem('NoMasterCart', JSON.stringify([product]));
    } else {
      const indexOfProduct = itemsInCart.findIndex((item) => item.id === product.id);
      if (indexOfProduct >= 0) {
        itemsInCart[indexOfProduct].quantityToOrder += 1;
        localStorage.setItem('NoMasterCart', JSON.stringify(itemsInCart));
      } else {
        product = { ...product, quantityToOrder: 1 };
        const itemsToAdd = [...itemsInCart, product];
        localStorage.setItem('NoMasterCart', JSON.stringify(itemsToAdd));
      }
    }
    this.getProdutsInLocalStorage();
  }

  handleSubClick(product) {
    const itemsInCart = JSON.parse(localStorage.getItem('NoMasterCart'));
    const indexOfProduct = itemsInCart.findIndex((item) => item.id === product.id);
    itemsInCart[indexOfProduct].quantityToOrder -= 1;
    localStorage.setItem('NoMasterCart', JSON.stringify(itemsInCart));
    this.getProdutsInLocalStorage();
  }

  handleDeleteClick(id) {
    const itemsInCart = JSON.parse(localStorage.getItem('NoMasterCart'));
    const indexOfProduct = itemsInCart.findIndex((item) => item.id === id);
    itemsInCart.splice(indexOfProduct, 1);
    localStorage.setItem('NoMasterCart', JSON.stringify(itemsInCart));
    this.getProdutsInLocalStorage();
  }

  getProdutsInLocalStorage() {
    const itemsInCart = JSON.parse(localStorage.getItem('NoMasterCart'));
    if (itemsInCart) {
      this.setState({
        cartProducts: [...itemsInCart],
      });
    }
  }

  hasProducts() {
    const { cartProducts } = this.state;
    const arrow = 'https://img.icons8.com/fluent/48/000000/circled-left.png';
    const cart = ('https://img.icons8.com/fluent/48/000000/shopping-cart-loaded.png');
    return (
      <div className="fullCart">
        <Link to="/"><img src={ arrow } alt="arrow" className="button start" /></Link>
        <div>
          <img src={ cart } alt="cart" className="button" />
          <span><strong> Carrinho de Compras</strong></span>
        </div>
        <h3>
          Você possui
          { ` ${cartProducts.length} ` }
          itens no carrinho
        </h3>
        <Link to="/checkout">
          <button type="button" data-testid="checkout-products">
            Finalizar Compra
          </button>
        </Link>
        <div className="products">
          {cartProducts.map((product) => (
            <Card
              key={ product.id }
              product={ product }
              testid="shopping-cart-product-name"
              inCart
              handleDeleteClick={ this.handleDeleteClick }
              handleSubClick={ this.handleSubClick }
              handleAddClick={ this.handleAddClick }
            />
          ))}
        </div>
      </div>
    );
  }

  emputCart() {
    const arrow = 'https://img.icons8.com/fluent/48/000000/circled-left.png';
    const cart = ('https://img.icons8.com/fluent/48/000000/shopping-cart-loaded.png');
    return (
      <div className="emptyCart">
        <Link to="/">
          <img src={ arrow } alt="arrow" className="button start" />
        </Link>
        <div>
          <img
            src={ cart }
            alt="cart"
            className="button"
          />
          <span><strong> Carrinho de Compras</strong></span>
        </div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <img src="https://www.downloadclipart.net/medium/box-transparent-background.png" alt="box" />
      </div>
    );
  }

  render() {
    const { cartProducts } = this.state;
    return (
      <div>
        {cartProducts.length > 0 && this.hasProducts()}
        {cartProducts.length <= 0 && this.emputCart()}
      </div>
    );
  }
}

export default Cart;
