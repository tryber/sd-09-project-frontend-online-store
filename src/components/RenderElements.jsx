import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductList from './ProductList';

class RenderElements extends React.Component {
  render() {
    const {
      products,
      handleClick,
      handleInputChange,
    } = this.props;
    return (
      <div>
        <div className="container">
          <h4 data-testid="home-initial-message" className="center">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h4>
          <input
            className="input"
            type="text"
            data-testid="query-input"
            onChange={ handleInputChange }
          />
          <button
            className="button"
            type="button"
            data-testid="query-button"
            onClick={ handleClick }
          >
            PESQUISAR
          </button>
          <button type="button" className="button">
            <Link to="/cart" data-testid="shopping-cart-button">
              <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="cart icon" height="25px" />
            </Link>
          </button>
        </div>
        <ProductList products={ products } />
      </div>
    );
  }
}

RenderElements.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default RenderElements;
