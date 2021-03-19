import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AddToCart from '../components/AddToCart';
import CartButton from '../components/CartButton';
import ProductsEvaluation from '../components/ProductsEvaluation';

class ItemDetails extends Component {
  constructor() {
    super();

    this.state = {
      cartCount: 0,
    };

    this.handleLocalStorage = this.handleLocalStorage.bind(this);
    this.updateCartCount = this.updateCartCount.bind(this);
  }

  componentDidMount() {
    this.handleLocalStorage();
  }

  handleLocalStorage() {
    const keys = Object.keys(localStorage)
      .filter((item) => item.includes('_itemCart_'));

    this.setState({
      cartCount: keys.length,
    });
  }

  updateCartCount() {
    this.setState((prev) => ({
      cartCount: prev.cartCount + 1,
    }));
  }

  render() {
    const { location: { state: { result } } } = this.props;
    const { title, thumbnail, price, id } = result;
    const { cartCount } = this.state;
    return (
      <main>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <div>
          <p>{ price }</p>
          <p>detalhes do item</p>
        </div>
        <Link to="/">Voltar</Link>
        <AddToCart
          testId="product-detail-add-to-cart"
          itemCart={ result }
          update={ this.updateCartCount }
        />
        <CartButton cart={ cartCount } />
        <ProductsEvaluation itemId={ id } />
      </main>
    );
  }
}

ItemDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      result: PropTypes.shape({
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired,
    }),
  }).isRequired,

};

export default ItemDetails;
