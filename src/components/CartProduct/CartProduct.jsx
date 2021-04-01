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
    this.updateQuantityItems = this.updateQuantityItems.bind(this);
  }

  componentDidUpdate(_, { quantityItems: prevQuantity }) {
    const { quantityItems: currQuantity } = this.state;
    const { addProductToCart, removeProductFromCart } = this.context;
    const { info } = this.props;
    if (currQuantity > prevQuantity) {
      addProductToCart({ ...info });
    } else if (currQuantity < prevQuantity) {
      const { id } = info;
      removeProductFromCart(id);
    }
  }

  updateQuantityItems(quantityItems) {
    this.setState({ quantityItems });
  }

  render() {
    const { info } = this.props;
    const { title, thumbnail, price, availableQuantity } = info;
    const { quantityItems } = this.state;
    const result = price * quantityItems;
    return (
      <section>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <img src={ thumbnail } alt={ title } />
        <p>{Math.round(result * 100) / 100}</p>
        <IncrementDecrementButton
          value={ quantityItems }
          maxValue={ availableQuantity }
          updateQuantity={ this.updateQuantityItems }
        />
      </section>
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
