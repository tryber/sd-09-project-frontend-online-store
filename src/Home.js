import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import Categories from './Categories';
import Products from './Products';

import './Home.css';
import CartQuantity from './CartQuantity';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedProducts: [],
      productsApi: undefined,
      categoryId: '',
    };
    this.getCategoriesApi = this.getCategoriesApi.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.getProductsFilterByCategory = this.getProductsFilterByCategory.bind(this);
    this.onRadioChange = this.onRadioChange.bind(this);
  }

  componentDidMount() {
    this.getCategoriesApi();
  }

  onRadioChange({ target }) {
    const { id } = target;
    this.setState({
      categoryId: id,
    }, () => (this.getProducts()));
  }

  async getProducts() {
    const searchInput = document.querySelector('.searchInput').value;
    const { categoryId } = this.state;
    const productsArray = await getProductsFromCategoryAndQuery(categoryId, searchInput);
    console.log(productsArray);
    this.setState({
      productsApi: productsArray,
      selectedProducts: productsArray.results,
    });
  }

  getProductsFilterByCategory() {
    const { productsApi, categoryId } = this.state;
    if (productsApi) {
      const newFilterCategory = productsApi.results
        .filter((product) => (product.category_id === categoryId));
      this.setState({
        selectedProducts: newFilterCategory,
      });
    }
  }

  async getCategoriesApi() {
    const arrayCategories = await getCategories();
    this.setState({
      categories: arrayCategories,
    });
  }

  render() {
    const message = (
      <h5
        data-testid="home-initial-message"
        className="defaultMessage"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h5>
    );
    const { categories, selectedProducts, productsApi } = this.state;
    const { handleProduct, totalProducts } = this.props;
    return (
      <div>
        <input type="text" className="searchInput" data-testid="query-input" />
        { message }
        <button data-testid="query-button" type="button" onClick={ this.getProducts }>
          Pesquisar
        </button>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
          className="button-link"
        >
          Adicionar ao Carrinho
          <CartQuantity totalProducts={ totalProducts } />
        </Link>
        {
          categories.map(({ id, name }) => (
            <Categories
              onChange={ this.onRadioChange }
              key={ id }
              name={ name }
              id={ id }
            />))
        }
        {
          !productsApi ? <p>Nenhum Produto Encontrado</p>
            : (selectedProducts.map((product) => (
              <Products
                product={ product }
                key={ product.id }
                handleProduct={ handleProduct }
              />
            )))
        }
      </div>
    );
  }
}

Home.propTypes = {
  handleProduct: PropTypes.func,
  totalProducts: PropTypes.string,
}.isRequired;
export default Home;
