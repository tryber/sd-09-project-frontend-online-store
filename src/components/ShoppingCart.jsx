import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    const { state } = location;
    this.state = {
      listOfProducts: [...state],
      totalPrice: 0,
    };
    this.totalPrice = this.totalPrice.bind(this);
    this.increaseProductQuantity = this.increaseProductQuantity.bind(this);
    this.decreaseProductQuantity = this.decreaseProductQuantity.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.renderEmptyCart = this.renderEmptyCart.bind(this);
    this.renderTotalPrice = this.renderTotalPrice.bind(this);
    this.renderCheckoutButton = this.renderCheckoutButton.bind(this);
  }

  componentDidMount() {
    this.totalPrice();
  }

  totalPrice() {
    const { listOfProducts } = this.state;
    const total = listOfProducts
      .reduce((acc, product) => acc + (product.price * product.quantity), 0);
    this.setState({
      totalPrice: total,
    });
  }

  increaseProductQuantity(id) {
    const { listOfProducts } = this.state;
    const newCart = listOfProducts.map((item) => {
      const { available_quantity: availableQuantity } = item;
      if (item.id === id && availableQuantity > item.quantity) {
        item.quantity += 1;
        return item;
      }
      return item;
    });
    this.setState({
      listOfProducts: newCart,
    });
    this.totalPrice();
  }

  decreaseProductQuantity(id) {
    const { listOfProducts } = this.state;
    const item = listOfProducts.find((product) => product.id === id);
    if (item.quantity !== 0) {
      item.quantity -= 1;
    }
    this.setState({
      listOfProducts,
    });
    this.totalPrice();
  }

  deleteProduct(id) {
    const { listOfProducts } = this.state;
    const removeItem = listOfProducts.find((product) => product.id === id);
    const index = listOfProducts.indexOf(removeItem);
    listOfProducts.splice(index, 1);
    this.setState({
      listOfProducts,
    });
    this.totalPrice();
  }

  renderEmptyCart() {
    return (
      <section>
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
      </section>
    );
  }

  renderTotalPrice() {
    const { totalPrice } = this.state;
    return (
      <p>
        O valor total da compra: R$
        { totalPrice }
      </p>
    );
  }

  renderCheckoutButton() {
    const { listOfProducts } = this.state;
    return (
      <button
        type="button"
      >
        <Link
          to={ {
            pathname: '/order-summary',
            state: listOfProducts,
          } }
          data-testid="checkout-products"
        >
          Revisar Compra
        </Link>
      </button>
    );
  }

  render() {
    const { listOfProducts } = this.state;
    const emptyCart = this.renderEmptyCart();
    if (listOfProducts.length === 0) return emptyCart;
    return (
      <div>
        {
          listOfProducts.map(({ title, thumbnail, quantity, id, price }) => (
            <div key={ id }>
              <button
                type="button"
                onClick={ () => this.deleteProduct(id) }
              >
                X
              </button>
              <img
                src={ thumbnail }
                alt={ `foto ${title}` }
              />
              <p data-testid="shopping-cart-product-name">{ title }</p>
              <div>
                <button
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ () => this.decreaseProductQuantity(id) }
                >
                  -
                </button>
                <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
                <button
                  type="button"
                  data-testid="product-increase-quantity"
                  onClick={ () => this.increaseProductQuantity(id) }
                >
                  +
                </button>
                <span>
                  R$
                  { price }
                </span>
              </div>
            </div>
          ))
        }
        { this.renderTotalPrice() }
        { this.renderCheckoutButton() }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf(),
  }).isRequired,
};

export default ShoppingCart;
