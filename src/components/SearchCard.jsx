import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchCard extends Component {
  render() {
    const { result, response, addToCart, handleCartItemsQuantity } = this.props;
    if (response) return <div>Nenhum produto foi encontrado</div>;
    return (
      result.map(({
        title,
        thumbnail,
        price,
        id,
        available_quantity: availableQuantity,
        shipping: {
          free_shipping: freeShipping,
        },
      }) => (
        <div data-testid="product" key={ id }>
          <h4>{ title }</h4>
          <img src={ thumbnail } alt={ title } />
          <p>{`R$ ${price}`}</p>
          <p>
            Quantidade em estoque:
            { availableQuantity }
          </p>
          { freeShipping && <h4 data-testid="free-shipping">Frete grátis</h4>}
          <Link
            data-testid="product-detail-link"
            to={ {
              pathname: `/${id}/detalhes`,
              state: {
                detalhes: {
                  id, price, thumbnail, title, availableQuantity, freeShipping },
              },
            } }
          >
            Ver detalhes
          </Link>
          <button
            data-testid="product-add-to-cart"
            type="button"
            onClick={ (event) => {
              addToCart({
                title, thumbnail, price, id, availableQuantity, freeShipping }, event);
              handleCartItemsQuantity(1);
            } }
          >
            Adicionar ao carrinho
          </button>
        </div>
      ))
    );
  }
}

SearchCard.propTypes = {
  result: PropTypes.arrayOf(PropTypes.object),
  response: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  handleCartItemsQuantity: PropTypes.func.isRequired,
};

SearchCard.defaultProps = {
  result: [],
};

export default SearchCard;
