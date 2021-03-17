import React from 'react';

class CheckoutProductReview extends React.Component {
  constructor() {
    super();
    this.productCartReview = this.productCartReview.bind(this);
  }

  componentDidMount() {
    this.productCartReview();
  }

  productCartReview() {
    const storedProducts = JSON.parse(localStorage.getItem('itens'));
    return (
      <div className="cartReviewField">
        <fieldset>
          <legend className="checkoutLegend">1 - Revise seus Produtos</legend>
          { storedProducts.map(((product) => (
            <div className="cartReviewProduct" key={ `${product.id}` }>
              <p data-testid="shopping-cart-product-quantity">{ product.quantity }</p>
              <p
                className="title"
                data-testid="shopping-cart-product-name"
              >
                { product.title }
              </p>
              <img alt={ product.title } src={ product.thumbnail } />
              <p>
                R$
                { product.price }
              </p>
              <hr />
            </div>
          ))) }
        </fieldset>
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.productCartReview() }
      </div>
    );
  }
}

export default CheckoutProductReview;
