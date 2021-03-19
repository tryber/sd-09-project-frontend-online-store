import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { incrementProduct } from '../services/dataservices';
import ProductsAtCart from '../services/data';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.counter = this.counter.bind(this);
    this.state = {
      counter: this.counter(),
    };
    this.productRender = this.productRender.bind(this);
  }

  counter(click) {
    let counter = 0;

    if (ProductsAtCart.length > 0) {
      ProductsAtCart.map((product) => {
        counter += product.quantity;
        return counter;
      });
    }
    if (click === 'click') {
      this.setState({
        counter,
      });
    }
    return counter;
  }

  productRender() {
    const { location } = this.props;
    const { state } = location;
    const { title, image, price, productId, freeShipping } = state;
    const { counter } = this.state;
    return (
      <div>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">Carrinho</Link>
        <span data-testid="shopping-cart-size">
          { counter }
        </span>
        <div data-testid="product-detail-name">
          {title}
        </div>
        <div data-testid="shopping-cart-product-name">
          <h1>{ title }</h1>
          <img src={ image } alt={ title } />
          <p>{ price }</p>
          { freeShipping ? <div data-testid="free-shipping"> Frete Grátis</div> : ''}
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => {
              incrementProduct({ title, image, price, productId, quantity: 1 });
              this.counter('click');
            } }
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }

  loading() {
    return <div> loading </div>;
  }

  render() {
    return (
      <div>
        {this.productRender()}
        <p>Avalie o produto:</p>
        <label htmlFor="evaluation-text">
          Comentário:
          <textarea
            data-testid="product-detail-evaluation"
            placeholder="Deixe seu comentário sobre o produto."
            name="evaluation-text"
          />
        </label>
        <label htmlFor="evaluation-note">
          Avaliação:
          <input
            type="number"
            name="evaluation-note"
            min={ 1 }
            max={ 5 }
            step={ 0.1 }
          />
        </label>
        <button type="button">Avaliar</button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.string,
      productId: PropTypes.string,
      freeShipping: PropTypes.bool,
    }),
  }).isRequired,
};

export default ProductDetails;
