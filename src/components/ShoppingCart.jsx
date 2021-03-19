import React from 'react';
import { Link } from 'react-router-dom';
import ProductsAtCart from '../services/data';
import ShoppingCartItem from './ShoppingCartItem';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: ProductsAtCart,
    };
    this.emptyMessage = this.emptyMessage.bind(this);
    this.renderCardItem = this.renderCardItem.bind(this);
  }

  emptyMessage() {
    return <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>;
  }

  renderCardItem() {
    const { products } = this.state;
    return products
      .map((product) => <ShoppingCartItem product={ product } key={ product.id } />);
  }

  render() {
    return (
      <div>
        <Link to="/">Voltar</Link>
        <div>
          { ProductsAtCart.length === 0 ? this.emptyMessage() : this.renderCardItem() }
          <Link to="/checkout" data-testid="checkout-products">
            <button type="button">Finalizar Compra</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
