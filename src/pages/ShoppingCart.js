import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardShoppingCart from '../Components/CardShoppingCart/CardShoppingCart';
import Cart from '../services/Data';

export default class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      item: Cart,
    };
  }

  render() {
    const { item } = this.state;
    if (item.length === 0) {
      return (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>);
    }
    return (
      <div>
        <Link exact to="/">Volta a pagina inicial</Link>
        <Link to="/Checkout" data-testid="checkout-products">
          checkout
        </Link>
        <ul className="ulShoppingCart">
          { item
            .map((product) => (
              <CardShoppingCart product={ product } key={ product.id } />
            )) }
        </ul>
      </div>
    );
  }
}
