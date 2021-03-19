import React, { Component } from 'react';

class ReviewCart extends Component {
  constructor() {
    super();
    this.renderCartItems = this.renderCartItems.bind(this);
    this.sumCalculation = this.sumCalculation.bind(this);
  }

  sumCalculation() {
    const keys = Object.keys(localStorage)
      .filter((item) => item.includes('_itemCart_'));
    const cartItens = keys.map((key) => {
      const item = JSON.parse(localStorage.getItem(key));
      return [item.custom, item.quant, item.price];
    });
    return cartItens;
  }

  renderCartItems() {
    const keys = Object.keys(localStorage)
      .filter((item) => item.includes('_itemCart_'));
    const cartItens = keys.map((key) => {
      const item = JSON.parse(localStorage.getItem(key));
      return (
        <div key={ item.custom }>
          <img src={ item.thumbnail } alt={ item.title } />
          <p data-testid="shopping-cart-product-name">{ item.title }</p>
          <p className="product-price">{ item.price }</p>
          <p className="product-quantity">{ item.quant }</p>
        </div>
      );
    });
    return cartItens;
  }

  render() {
    return (
      <section>
        {this.renderCartItems()}
        <span>
          Total dos items:
          {this.sumCalculation().reduce((prev, curr) => {
            prev += curr[1] * curr[2];
            return prev;
          }, 0)}
        </span>
      </section>
    );
  }
}

export default ReviewCart;
