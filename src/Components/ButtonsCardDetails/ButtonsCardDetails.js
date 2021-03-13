import React, { Component } from 'react';
import './ButtonsCardDetails.css';

class ButtonsCardDetails extends Component {
  constructor() {
    super();

    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);

    this.state = {
      quantity: 1,
    };
  }

  increaseQuantity(quantity) {
    if (quantity >= 1) this.setState({ quantity: quantity += 1 });
  }

  decreaseQuantity(quantity) {
    if (quantity > 1) this.setState({ quantity: quantity -= 1 });
  }

  render() {
    const { quantity } = this.state;
    return (
      <div className="changeQuantityConainer changQuant">
        <button
          onClick={ () => this.decreaseQuantity(quantity) }
          data-testid="product-decrease-quantity"
          type="button"
          className="minusPlus"
        >
          -
        </button>
        <input type="number" value={ quantity } className="numberToAdd" />
        <button
          onClick={ () => this.increaseQuantity(quantity) }
          data-testid="product-increase-quantity"
          type="button"
          className="minusPlus"
        >
          +
        </button>
      </div>
    );
  }
}

export default ButtonsCardDetails;
