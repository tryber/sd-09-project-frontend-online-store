import React from 'react';

class ShoppingCartItens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: localStorage.getItem('title'),
      image: localStorage.getItem('image'),
      quantity: localStorage.getItem('quantity'),
    };
  }

  render() {
    const { title, image, quantity } = this.state;
    return (
      <section className="shopping-card-product">
        <img src={ image } alt="" className="shopping-card-image" />
        <p
          data-testid="shopping-cart-product-name"
          className="shopping-card-title"
        >
          { title }
        </p>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
      </section>
    );
  }
}

export default ShoppingCartItens;
