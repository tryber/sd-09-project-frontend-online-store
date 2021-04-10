import React from 'react';
import { arrayOf, object } from 'prop-types';
import { Link } from 'react-router-dom';
import CartProduct from '../components/CartProduct';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    const { location: { state: { cartProducts } } } = props;
    this.state = { cartProducts };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.removeCartProduct = this.removeCartProduct.bind(this);
    this.sumPrices = this.sumPrices.bind(this);
  }

  sumPrices() {
    const { cartProducts } = this.state;
    const totalPrice = cartProducts
      .reduce((total, { quantity, price }) => {
        total += quantity * price;
        return total;
      }, 0);
    return totalPrice.toFixed(2);
  }

  removeCartProduct(product) {
    const { cartProducts } = this.state;
    const newCart = cartProducts.filter((cartProduct) => cartProduct !== product);
    this.setState({ cartProducts: newCart });
  }

  addItem(product) {
    const { cartProducts } = this.state;
    const newCart = cartProducts.map((cartProduct) => {
      const { available_quantity: availableQuantity } = product;
      if (cartProduct.id === product.id && cartProduct.quantity < availableQuantity) {
        return { ...cartProduct, quantity: cartProduct.quantity + 1 };
      }
      return cartProduct;
    });
    this.setState({ cartProducts: newCart });
  }

  removeItem(product) {
    const { cartProducts } = this.state;
    const newCart = cartProducts.map((cartProduct) => {
      if (cartProduct.id === product.id && cartProduct.quantity === 1) {
        return { ...cartProduct, quantity: 1 };
      } if (cartProduct.id === product.id) {
        return { ...cartProduct, quantity: cartProduct.quantity - 1 };
      }
      return cartProduct;
    });
    this.setState({ cartProducts: newCart });
  }

  render() {
    const { cartProducts } = this.state;
    if (cartProducts.length !== 0) {
      return (
        <div>
          {
            cartProducts
              .map((product) => (<CartProduct
                key={ product.id }
                product={ product }
                addItem={ this.addItem }
                removeItem={ this.removeItem }
                removeCartProduct={ this.removeCartProduct }
              />))
          }
          <p>
            {`Valor total: R$ ${this.sumPrices()}`}
          </p>
          <Link
            to={ { pathname: '/payment-details', state: { cartProducts } } }
            data-testid="checkout-products"
          >
            Finalizar Compra
          </Link>
        </div>
      );
    }

    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartProducts: arrayOf(object),
}.isRequired;

export default ShoppingCart;
