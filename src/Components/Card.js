import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    const { product, totalCart } = this.props;
    const {
      title,
      thumbnail,
      price,
      id,
      shipping: { free_shipping: freeShipping } } = product;

    return (
      <div data-testid="product" className="card">
        <p className="card-title">{title}</p>
        <img className="card-img" src={ thumbnail } alt={ title } />
        <Link
          to={ { pathname: `/productDetails/${id}`, state: { product } } }
          data-testid="product-detail-link"
        >
          { freeShipping && <p data-testid="free-shipping">Frete Grátis</p>}
          Detalhe do Produto
        </Link>
        <p className="card-price">{`R$ ${price}`}</p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => totalCart(product, id) }
        >
          Adicionar no Carrinho
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
  totalCart: PropTypes.func.isRequired,
};

export default Card;
