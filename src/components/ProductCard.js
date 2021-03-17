import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddCart = this.handleAddCart.bind(this);
  }

  handleAddCart() {
    /** Source: https://stackoverflow.com/questions/40203350/getting-all-items-of-one-group-from-webstorage */
    const { product } = this.props;
    const cartData = {
      items: [],
    };

    if (localStorage.getItem('cart')) {
      cartData.items = JSON.parse(localStorage.getItem('cart')).items;
    }
    cartData.items.push(product);

    localStorage.setItem('cart', JSON.stringify(cartData));
  }

  render() {
    const { product } = this.props;
    return (
      <section data-testid="product">
        <h3>{ product.title }</h3>
        <img src={ product.thumbnail } alt="Imagem do Produto" />
        <p>{ product.price }</p>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ this.handleAddCart }
        >
          Adicionar ao Carrinho
        </button>
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/ProductDetailed/${product.id}`,
            state: {
              product,
            },
          } }
        >
          Detalhes
        </Link>
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
