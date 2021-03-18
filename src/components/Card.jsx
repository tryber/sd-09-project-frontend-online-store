import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NothingFound from './NothingFound';

class Card extends Component {
  constructor() {
    super();

    if
    (localStorage.length === 0) { localStorage.setItem('productId', JSON.stringify([])); }
  }

  render() {
    const { productsContent, status } = this.props;
    if (productsContent.length === 0 && status === true) {
      return <NothingFound />;
    }
    const map = productsContent.map((currentValue) => (
      <div
        key={ currentValue.id }
        data-testid="product"
      >
        <Link
          data-testid="product-detail-link"
          to={ `/productdetails/${currentValue.id}` }
        >
          <p>{currentValue.title}</p>
          <img src={ currentValue.thumbnail } alt="product-sample" />
          <p>{currentValue.price}</p>
        </Link>
        <button
          id={ currentValue.id }
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => {
            const storageIds = JSON.parse(localStorage.getItem('productId'));
            storageIds.push(currentValue.id);
            localStorage.setItem('productId', JSON.stringify(storageIds));
          } }
        >
          Adicionar ao Carrinho
        </button>

      </div>
    ));

    return (<div>{ map }</div>);
  }
}

Card.propTypes = {
  productsContent: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
  }),
}.isRequired;

export default Card;
