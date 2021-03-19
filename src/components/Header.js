import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ButtonShoppingCart from './ButtonShoppingCart';

class Header extends React.Component {
  async fetchProducts(categoryId, query) {
    const response = await getProductsFromCategoryAndQuery(categoryId, query);

    const { onChangeProducts } = this.props;
    const products = response.results;
    onChangeProducts(products);
  }

  searchButton() {
    const { searchValue, categoryValue } = this.props;
    return (
      <button
        type="button"
        onClick={ () => this.fetchProducts(categoryValue, searchValue) }
        data-testid="query-button"
      >
        Buscar
      </button>
    );
  }

  render() {
    const { showInput, searchValue } = this.props;
    const { showSearchButton } = this.props;
    const { upDateSearchValue } = this.props;
    return (
      <header className="header">
        {
          showInput
          && <input
            data-testid="query-input"
            type="search"
            name="searchValue"
            id=""
            className="input-search"
            value={ searchValue }
            onChange={ upDateSearchValue }
          />
        }
        {
          showSearchButton
          && this.searchButton()
        }
        <ButtonShoppingCart />
      </header>
    );
  }
}

Header.propTypes = {
  onChangeProducts: PropTypes.func,
  showInput: PropTypes.bool.isRequired,
  showSearchButton: PropTypes.bool.isRequired,
  searchValue: PropTypes.string,
  upDateSearchValue: PropTypes.func,
  categoryValue: PropTypes.string,
};

Header.defaultProps = {
  onChangeProducts: () => {},
  searchValue: '',
  upDateSearchValue: () => {},
  categoryValue: '',
};

export default Header;
