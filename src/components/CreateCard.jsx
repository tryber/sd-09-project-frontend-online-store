import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CreateCard extends Component {
  render() {
    const { product: { title, thumbnail, price, id } } = this.props;
    return (
      <Link
        to={ `/product-details/${id}` }
        data-testid="product-detail-link"
      >
        <div className="card" data-testid="product">
          <h3 className="card-title">{ title }</h3>
          <div className="image">
            <img src={ thumbnail } alt={ `Imagem de ${title}` } />
          </div>
          <p>{ price }</p>
        </div>
      </Link>
    );
  }
}

CreateCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default CreateCard;
