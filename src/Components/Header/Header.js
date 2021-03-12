import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { IoBagCheckOutline } from 'react-icons/io5';

class Header extends Component {

  render() {
    const { setSearchText, handleCategory, totalQuant } = this.props;
    return (
      <header>
        <input
          id="searchInput"
          type="text"
          data-testid="query-input"
          onChange={ setSearchText }
        />
        <button type="button" onClick={ handleCategory } data-testid="query-button">
          <BsSearch />
        </button>
        <button type="button">
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">
            <FiShoppingCart />
          </Link>
          <div data-testid="shopping-cart-size">{ totalQuant }</div>
        </button>
        <button type="button">
          <Link to="/Checkout" data-testid="checkout-products">
            <IoBagCheckOutline />
          </Link>
        </button>
      </header>
    );
  }
}

Header.propTypes = {
  setSearchText: PropTypes.func.isRequired,
  handleCategory: PropTypes.func.isRequired,
  handleCategory: PropTypes.number.isRequired,
};

export default Header;
