import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBack from './logo_arrow_back.svg';
import './ShoppingCart.css';
import CartItem from './CartItem';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.loadItemsFromLocalStorage = this.loadItemsFromLocalStorage.bind(this);
  }

  componentDidMount() {
    this.loadItemsFromLocalStorage();
  }

  loadItemsFromLocalStorage() {
    let products = [];
    if (localStorage.getItem('cart')) {
      products = JSON.parse(localStorage.getItem('cart')).items;
    }
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    const cartList = products.length === 0
      ? (
        <p
          data-testid="shopping-cart-empty-message"
          className="message"
        >
          Seu carrinho está vazio
        </p>
      )
      : products
        .map((product) => (<CartItem key={ product.id } product={ product } />));
    return (
      <div>
        <Link to="/">
          <img src={ ArrowBack } alt="logo arrow back" />
        </Link>
        <span>Carrinho de Compras</span>
        {cartList}
      </div>
    );
  }
}
export default ShoppingCart;
