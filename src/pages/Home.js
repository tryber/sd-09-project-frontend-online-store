import React from 'react';
import PropTypes from 'prop-types';
import AsideMenu from '../components/AsideMenu';
import ProductList from '../components/ProductList';
import '../styles/pages/Home.css';
import SearchBar from '../components/SearchBar';

class Home extends React.Component {
  render() {
    const {
      handleChange,
      handleSearchClick,
      handleCategoryClick,
      addProductToCart,
      inputValue,
      products,
      categories,
      cartLength,
    } = this.props;
    return (
      <div className="home-container">
        <AsideMenu
          categories={ categories }
          handleCategoryClick={ handleCategoryClick }
        />
        <div className="main-container">
          <SearchBar
            handleSearchClick={ handleSearchClick }
            handleChange={ handleChange }
            value={ inputValue }
            cartLength={ cartLength }
          />
          <ProductList products={ products } addProductToCart={ addProductToCart } />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  addProductToCart: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired,
  handleCategoryClick: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  inputValue: PropTypes.string.isRequired,
  cartLength: PropTypes.number.isRequired,
};

export default Home;
