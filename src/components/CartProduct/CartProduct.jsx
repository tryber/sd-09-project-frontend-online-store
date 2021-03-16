import React, { Component } from 'react';
import { number, string, shape } from 'prop-types';
import InputContext from '../InputContext';
import IncrementDecrementButton from '../IncrementDecrementButton';

class CartProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantityItems: props.info.quantity,
    };
    this.incrementOnClick = this.incrementOnClick.bind(this);
    this.decrementOnClick = this.decrementOnClick.bind(this);
  }

  incrementOnClick() {
    this.setState((prevState) => ({ quantityItems: prevState.quantityItems + 1 }));
  }

  decrementOnClick() {
    const { quantityItems } = this.state;
    if (quantityItems > 0) {
      this.setState((prevState) => ({ quantityItems: prevState.quantityItems - 1 }));
    }
  }

  render() {
    const { info } = this.props;
    const { title, thumbnail, price, id } = info;
    const { quantityItems } = this.state;
    const result = price * quantityItems;
    return (
      <InputContext.Consumer>
        {
          ({ addProductToCart, removeProductFromCart }) => (
            <section>
              <p data-testid="shopping-cart-product-name">{title}</p>
              <img src={ thumbnail } alt={ title } />
              <p>{Math.round(result * 100) / 100}</p>
              <p data-testid="shopping-cart-product-quantity">{ quantityItems }</p>
              <IncrementDecrementButton
                decreaseOnClick={ () => {
                  this.decrementOnClick();
                  removeProductFromCart(id);
                } }
                increaseOnClick={ () => {
                  this.incrementOnClick();
                  addProductToCart({ title, id, thumbnail, price });
                } }
              />
            </section>
          )
        }
      </InputContext.Consumer>
    );
  }
}

CartProduct.contextType = InputContext;

CartProduct.propTypes = {
  info: shape({
    price: number,
    thumbnail: string,
    id: string,
    title: string,
  }),
}.isRequired;

export default CartProduct;
