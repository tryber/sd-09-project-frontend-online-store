import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import SearchedProducts from './SearchedProducts';
import ProductCard from './ProductCard';
import * as api from '../services/api';

class ProductList extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.getProductByCategory = this.getProductByCategory.bind(this);

    this.state = {
      products: {},
      query: '',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async getProductByCategory(category, query) {
    await api.getProductsFromCategoryAndQuery(category, query)
      .then((response) => this.setState({
        products: response,
      }));
   console.log(this.state.products.results);
  }

  render() {
    const { products, query } = this.state;
    const { categories } = this.props;
    const productsArray = products.results;
    console.log(productsArray);
    return (
      <section>
        <Categories categories={ categories } />
        <input
          type="text"
          name="query"
          data-testid="query-input"
          onChange={ this.handleChange }
        />
        <SearchedProducts
          clickGetProducts={ this.getProductByCategory }
          searchTerm={ query }
        />
        <Link to="/cart" data-testid="shopping-cart-button">
          <button type="button">cart</button>
        </Link>
        {/* {productsArray.map((product) => <ProductCard key={ product.id } card={ product } />)} */}
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}

ProductList.propTypes = {
  categories: PropTypes.arrayOf(Object).isRequired,
};

export default ProductList;
