import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RatingForm from '../components/RatingForm';
import './ProductDetails.css';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      shoppingCart: [],
      clicked: false,
    };

    this.addOnCart = this.addOnCart.bind(this);
    this.checkStorage = this.checkStorage.bind(this);
  }

  componentDidMount() {
    this.getProductId();
    this.checkStorage();
  }

  getProductId() {
    const {
      location: { state: {
        id, price, thumbnail, title, attributes, availableQuantity, freeShipping } },
    } = this.props;
    this.setState({
      title,
      attributes,
      thumbnail,
      price,
      loading: false,
      id,
      availableQuantity,
      freeShipping,
    });
  }

  checkStorage() {
    if (sessionStorage.shoppingCart) {
      const cart = JSON.parse(sessionStorage.shoppingCart);
      this.setState({
        shoppingCart: [...cart],
      });
    }
  }

  addOnCart(title, id, price, availableQuantity) {
    this.setState((state) => ({
      shoppingCart: [...state.shoppingCart, { title, id, price, availableQuantity }],
      clicked: true,
    }), () => {
      const { shoppingCart } = this.state;
      sessionStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    });
  }

  renderAddToCartButton() {
    const { title, id, price, availableQuantity, clicked } = this.state;
    return (
      <button
        type="button"
        data-testid="product-detail-add-to-cart"
        onClick={ () => this.addOnCart(title, id, price, availableQuantity) }
        disabled={ clicked }
      >
        Adicionar ao Carrinho
      </button>
    );
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <div>Loading...</div>
      );
    }
    const {
      title,
      attributes,
      thumbnail, price, shoppingCart, freeShipping } = this.state;
    return (
      <div className="details-container">
        <Link to="/">Home</Link>
        <div className="productContainer">
          <h2 data-testid="product-detail-name">{ title }</h2>
          {freeShipping && <p data-testid="free-shipping">Frete grátis</p>}
          <img src={ thumbnail } alt={ title } />
          <p>
            R$
            { price }
          </p>
          { this.renderAddToCartButton() }
          <Link to="/shoppingCart">
            <button
              type="button"
              data-testid="shopping-cart-button"
            >
              ShoppingCart
              <span data-testid="shopping-cart-size">{` - ${shoppingCart.length}`}</span>
            </button>
          </Link>
          <ul className="attributes-list">
            {attributes.map((attribute) => (
              <li key={ attribute.id }>
                { `${attribute.name} -> ${attribute.value_name}` }
              </li>
            ))}
          </ul>
        </div>
        <RatingForm />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      attributes: PropTypes.arrayOf(PropTypes.object),
      availableQuantity: PropTypes.number,
      freeShipping: PropTypes.bool,
    }),
  }).isRequired,
};
