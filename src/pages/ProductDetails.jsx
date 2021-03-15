import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartButton from '../components/ShoppingCartButton';
import DetailEvaluation from '../components/DetailEvaluation';

class ProductDetails extends React.Component {
  render() {
    const { product, getProductFromCard } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div>
        <p data-testid="product-detail-name">{ title }</p>
        <img src={ thumbnail } alt="imagem do produto" />
        <p>{ price }</p>

        <button
          type="button"
          className="shopping-card"
          onClick={ (event) => getProductFromCard(event, product) }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>

        <ShoppingCartButton />
        <DetailEvaluation />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.string,
}.isRequired;

export default ProductDetails;
