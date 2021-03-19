import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cart from '../services/cart';
import RatingForm from './RatingForm';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.click = this.click.bind(this);
  }

  click(data) {
    cart(data);
  }

  render() {
    const { location: { state } } = this.props;
    const { product } = state;
    const { title, price, thumbnail } = product;
    // console.log(product);
    return (
      <div>
        <div>
          <h3 data-testid="product-detail-name">{`${title} - R$ ${price}`}</h3>
          <img src={ thumbnail } alt={ title } />
        </div>
        <div>
          <h4>Especificações Técnicas</h4>
          <button
            type="button"
            value={ product.id }
            onClick={ () => this.click(product) }
            data-testid="product-detail-add-to-cart"
          >
            Adicionar
          </button>
          <button type="button">
            <Link to="/cart" data-testid="shopping-cart-button">
              Cart
            </Link>
          </button>
        </div>
        <RatingForm />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
