import React from 'react';
import { Link } from 'react-router-dom';
import CartDisplay from './CartDisplay';
import './ShoppingCart.css';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      storage: 'ShoppingCart',
      products: [],
      totalValue: 0,
    };

    this.deleteProduct = this.deleteProduct.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.subProduct = this.subProduct.bind(this);
    this.createCart = this.createCart.bind(this);
  }

  deleteProduct({ target: { id } }) {
    const { storage, products, totalValue } = this.state;
    const cart = JSON.parse(localStorage.getItem(storage));
    let arrayCart = cart.filter((product) => product.id !== id);

    if (arrayCart.length === 0) {
      localStorage.removeItem(storage);
    } else {
      localStorage.setItem(storage, JSON.stringify(arrayCart));
    }

    arrayCart = products.find((product) => product.id === id);
    const total = totalValue - arrayCart.totalPrice;
    arrayCart = products.filter((product) => product.id !== id);

    this.setState({
      products: arrayCart,
      totalValue: total,
    });
  }

  addProduct({ target: { id } }) {
    const { storage, products, totalValue } = this.state;
    const cart = JSON.parse(localStorage.getItem(storage));
    const search = cart.find((product) => product.id === id);
    const index = cart.indexOf(search);
    cart[index].quantity += 1;
    localStorage.setItem(storage, JSON.stringify(cart));
    products[index].quantity = cart[index].quantity;
    let total = totalValue;
    total += products[index].price;
    products[index].totalPrice += products[index].price;
    this.setState({
      products,
      totalValue: total,
    });
  }

  subProduct({ target: { id } }) {
    const { storage, products, totalValue } = this.state;
    const cart = JSON.parse(localStorage.getItem(storage));
    const search = cart.find((product) => product.id === id);
    const index = cart.indexOf(search);
    cart[index].quantity -= 1;
    if (cart[index].quantity >= 1) {
      localStorage.setItem(storage, JSON.stringify(cart));
      products[index].quantity = cart[index].quantity;
      let total = totalValue;
      total -= products[index].price;
      products[index].totalPrice -= products[index].price;
      this.setState({
        products,
        totalValue: total,
      });
    }
  }

  createCart(cart) {
    const returnArray = [];
    let totalPrice = 0;
    let totalValue = 0;
    cart.forEach((product) => {
      const { id, quantity } = product;
      const { title, price, thumbnail } = JSON.parse(localStorage.getItem(id));
      totalPrice = price * quantity;
      returnArray.push({
        id,
        title,
        price,
        thumbnail,
        quantity,
        totalPrice,
      });
      totalValue += totalPrice;
    });

    const { products } = this.state;

    if (products.length === 0) {
      this.setState({
        products: returnArray,
        totalValue,
      });
    }
  }

  render() {
    const { storage } = this.state;
    if (localStorage.getItem(storage) === null) {
      return (
        <div className="shopping-cart">
          <Link to="/">Pagina inicial</Link>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }
    const cart = JSON.parse(localStorage.getItem(storage));
    this.createCart(cart);
    const { products, totalValue } = this.state;
    return (
      <div className="shopping-cart">
        <Link to="/">Pagina inicial</Link>
        <p>Carrinho de Compras</p>
        {products.map((product) => (
          <CartDisplay
            key={ product.id }
            id={ product.id }
            remove={ this.deleteProduct }
            thumbnail={ product.thumbnail }
            title={ product.title }
            subtract={ this.subProduct }
            quantity={ product.quantity }
            add={ this.addProduct }
            totalPrice={ product.totalPrice }
          />
        ))}
        <div className="total-value">
          <span> Valor Total da Compra: R$ </span>
          <span>{ parseFloat(totalValue).toFixed(2) }</span>
        </div>
        <div>
          <Link to="/checkout">
            <button
              data-testid="checkout-products"
              className="button-finish"
              type="button"
            >
              Finalizar Compra
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
