import React from 'react';
import { Link } from 'react-router-dom';
import './shoppingCart.css';

class shoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingCartIdList: [],
      quantity: {},
      totalValue: 0,
    };

    this.getShoppingCartItems = this.getShoppingCartItems.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateQuantities = this.updateQuantities.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.renderTotalValue = this.renderTotalValue.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
  }

  componentDidMount() {
    this.getShoppingCartItems();
  }

  getShoppingCartItems() {
    if (sessionStorage.shoppingCart) {
      const items = JSON.parse(sessionStorage.shoppingCart);
      items.forEach((item) => {
        this.setState(({ shoppingCartIdList }) => ({
          shoppingCartIdList: [...shoppingCartIdList, item],
        }), () => {
          this.updateQuantities();
        });
      });
    }
  }

  updateQuantities() {
    const { shoppingCartIdList } = this.state;
    shoppingCartIdList.forEach(({ id }) => {
      this.setState(({ quantity }) => ({
        quantity: {
          ...quantity,
          [id]: 1,
        },
      }), () => {
        this.renderTotalValue();
      });
    });
  }

  addItem(id) {
    this.setState((state) => ({
      quantity: {
        ...state.quantity,
        [id]: state.quantity[id] + 1,
      },
    }), () => {
      this.renderTotalValue();
    });
  }

  removeItem(id) {
    this.setState((state) => ({
      quantity: {
        ...state.quantity,
        [id]: state.quantity[id] - 1,
      },
    }), () => {
      this.renderTotalValue();
    });
  }

  removeFromCart(id) {
    const { shoppingCartIdList } = this.state;
    const listWithoutProduct = shoppingCartIdList
      .filter((product) => product.id !== id && product);
    sessionStorage.setItem('shoppingCart', JSON.stringify(listWithoutProduct));
    this.setState({
      shoppingCartIdList: listWithoutProduct,
    }, () => {
      this.renderTotalValue();
    });
  }

  emptyCart() {
    this.setState({
      shoppingCartIdList: [],
    }, () => {
      sessionStorage.removeItem('shoppingCart');
      this.renderTotalValue();
    });
  }

  renderEmptyCart() {
    return (
      <p data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </p>
    );
  }

  renderCartItems() {
    const { shoppingCartIdList, quantity } = this.state;
    return shoppingCartIdList
      .map(({ title, id, availableQuantity }) => (
        <div key={ id } id={ id }>
          <p data-testid="shopping-cart-product-name">{ title }</p>
          <p
            data-testid="shopping-cart-product-quantity"
          >
            { quantity[id] }
          </p>
          <button
            type="button"
            onClick={ () => this.addItem(id) }
            data-testid="product-increase-quantity"
            disabled={ availableQuantity <= quantity[id] }
          >
            +
          </button>
          <button
            type="button"
            onClick={ () => this.removeItem(id) }
            data-testid="product-decrease-quantity"
            disabled={ quantity[id] <= 1 }
          >
            -
          </button>
          <button type="button" onClick={ () => this.removeFromCart(id) }>X</button>

        </div>
      ));
  }

  renderTotalValue() {
    const { shoppingCartIdList, quantity } = this.state;
    const value = shoppingCartIdList
      .reduce((acc, curr) => (
        acc + (parseInt(curr.price, 10) * parseInt(quantity[curr.id], 10))
      ), 0);
    this.setState({
      totalValue: value,
    });
  }

  render() {
    const { shoppingCartIdList, totalValue } = this.state;
    return (
      <div className="cart-container">
        <Link to="/">Home</Link>
        {shoppingCartIdList.length > 0 ? this.renderCartItems() : this.renderEmptyCart()}
        <h3>
          Valor total: R$
          { totalValue }
        </h3>
        <button type="button" onClick={ this.emptyCart }>Esvaziar Carrinho</button>
        <Link to={ { pathname: '/checkout', state: { ...this.state } } }>
          <button
            type="button"
            data-testid="checkout-products"
            disabled={ shoppingCartIdList.length < 1 }
          >
            Finalize sua Compra
          </button>
        </Link>
      </div>
    );
  }
}

export default shoppingCart;
