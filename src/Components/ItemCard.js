import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddToCart from './AddToCart';

class ItemCard extends Component {
  render() {
    const { product, categorId, term } = this.props;
    const { title, price, thumbnail, id } = product;

    const categoriString = JSON.stringify(categorId);
    const termString = JSON.stringify(term);
    localStorage.setItem('categorId', categoriString);
    localStorage.setItem('term', termString);

    return (
      <div data-testid="product" className="item-card">
        <p>{title}</p>
        <img src={ thumbnail } alt={ `${title}` } />
        <p>{price}</p>
        <Link
          to={ `/ProductDetails/${id}` }
          data-testid="product-detail-link"
        >
          Ver detalhes
        </Link>
        <AddToCart product={ product } />
      </div>
    );
  }
}

ItemCard.propTypes = {
  product: Proptypes.shape({
    title: Proptypes.string,
    price: Proptypes.number,
    thumbnail: Proptypes.string,
    id: Proptypes.string,
  }).isRequired,
  categorId: Proptypes.string.isRequired,
  term: Proptypes.string.isRequired,
};

export default ItemCard;
