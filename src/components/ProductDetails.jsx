import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import RatingForm from './RatingForm';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [],
      shoppingCart: [],
    };
    this.fetchCategory = this.fetchCategory.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.setShoppingCart = this.setShoppingCart.bind(this);
  }

  componentDidMount() {
    this.fetchCategory();
    this.setShoppingCart();
  }

  setShoppingCart() {
    const { location } = this.props;
    const { state } = location;
    if (state) {
      this.setState({ shoppingCart: [...state] });
    }
  }

  addToCart() {
    const { product, shoppingCart } = this.state;
    product.quantity = 1;
    this.setState({ shoppingCart: [...shoppingCart, product] });
  }

  async fetchCategory() {
    const { match: { params: { categoryID, id } } } = this.props;
    const productObj = await api.getProductsFromCategoryAndQuery(categoryID, '');
    const productDetails = productObj.results
      .find((product) => product.id === id);
    this.setState({
      product: productDetails,
    });
  }

  render() {
    const { product, shoppingCart } = this.state;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <p>
          <span data-testid="product-detail-name">
            { title }
            {' '}
            -
            {' '}
          </span>
          <span>
            R$
            {' '}
            { price }
          </span>
        </p>
        <img src={ thumbnail } alt="product-thumbnail" />
        <RatingForm />
        <Link
          data-testid="shopping-cart-button"
          to={ {
            pathname: '/shopping-cart',
            state: shoppingCart,
          } }
        >
          Ir para carrinho
          <span data-testid="shopping-cart-size">{ shoppingCart.length }</span>
        </Link>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addToCart }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf(),
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      categoryID: PropTypes.string,
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
