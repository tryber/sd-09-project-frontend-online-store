import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/components/ProductCard.css';

class ProductCard extends React.Component {
  render() {
    const { product, getProductFromCard } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <section className="product" data-testid="product">
        <button
          type="button"
          className="shopping-card"
          onClick={ (event) => getProductFromCard(event, product) }
          data-testid="product-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>

        <Link
          to="/product-details"
          className="product-detail"
          data-testid="product-detail-link"
          // referencia para uso do evento - https://stackoverflow.com/questions/37639122/using-event-target-with-react-components
          onClick={ (event) => getProductFromCard(event, product) }
        >
          DETALHES
        </Link>

        <p>{ title }</p>
        <img src={ thumbnail } alt="imagem do produto" />
        <p>{ price }</p>

      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    available_quantity: PropTypes.number,
  }).isRequired,
  getProductFromCard: PropTypes.func.isRequired,
};

export default ProductCard;
