import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { products, addItemToCart } = this.props;

    return (
      <section className="products-container">
        { products.length !== 0
          ? products.map((product) => (
            <div key={ product.id } className="product-card" data-testid="product">
              <Link
                to={ { pathname: `/product/${product.id}`, state: { product } } }
                data-testid="product-detail-link"
              >
                <p>{product.title}</p>
                <img src={ product.thumbnail } alt={ product.title } />
                <p>{`R$ ${product.price}`}</p>
              </Link>
              <input
                type="button"
                value="Adicionar ao Carrinho"
                onClick={ () => addItemToCart(product) }
                data-testid="product-add-to-cart"
              />
            </div>))
          : (
            <h1>
              Produto nao encontrado.
            </h1>)}
      </section>
    );
  }
}

ProductCard.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      map: PropTypes.func,
      id: PropTypes.string,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
    }),
  ),
  addItemToCart: PropTypes.func,
};

ProductCard.defaultProps = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      map: PropTypes.func,
      id: PropTypes.string,
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
    }),
  ),
  addItemToCart: PropTypes.func,
};

export default ProductCard;
