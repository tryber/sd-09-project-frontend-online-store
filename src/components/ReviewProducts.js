import React, { Component } from 'react';
import CardReview from './CardReview';

class ReviewProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartProducts: [],
      total: 0,
    };
  }

  componentDidMount() {
    this.getProdutsInLocalStorage();
    this.totalValue();
  }

  getProdutsInLocalStorage() {
    const itemsInCart = JSON.parse(localStorage.getItem('NoMasterCart'));
    if (itemsInCart) {
      this.setState({
        cartProducts: [...itemsInCart],
      });
    }
  }

  totalValue() {
    const values = JSON.parse(localStorage.getItem('NoMasterCart'));
    const reducer = (acc, cur) => ({ price: acc.price + cur.price });
    const result = values.reduce(reducer);
    this.setState({
      total: result.price,
    });
  }

  render() {
    const { cartProducts, total } = this.state;
    return (
      <div className="review">
        <h3 data-testid="shopping-cart-product-quantity">
          Você possui
          { ` ${cartProducts.length} ` }
          itens no carrinho
        </h3>
        <div className="products">
          {cartProducts.map((product) => (
            <CardReview
              key={ product.id }
              product={ product }
              testid="shopping-cart-product-name"
            />
          ))}
        </div>
        <p>
          <strong>Total: </strong>
          { `R$ ${parseFloat(total).toFixed(2)}` }
        </p>
      </div>
    );
  }
}

export default ReviewProducts;
