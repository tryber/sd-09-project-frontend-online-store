import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchProduct extends React.Component {
  render() {
    const { handleChange, searchProduct } = this.props;

    return (
      <div className="search-container">
        <input
          type="text"
          name="query"
          onChange={ handleChange }
          className="search-input"
          data-testid="query-input"
        />
        <button
          type="button"
          onClick={ searchProduct }
          data-testid="query-button"
        >
          Pesquisar
        </button>
        <Link to="/cart" data-testid="shopping-cart-button">
          <button type="button">Carrinho</button>
        </Link>
      </div>
    );
  }
}

SearchProduct.propTypes = {
  handleChange: PropTypes.func,
  searchProduct: PropTypes.func,
};

SearchProduct.defaultProps = {
  handleChange: PropTypes.func,
  searchProduct: PropTypes.func,
};

export default SearchProduct;
