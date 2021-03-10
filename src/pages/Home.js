import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard/ProductCard';
import * as api from '../services/api';
import Categories from '../components/Categories';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.setSearchText = this.setSearchText.bind(this);
    this.searchProducts = this.searchProducts.bind(this);

    this.state = {
      searchText: '',
      productList: [],
    };
  }

  setSearchText({ target }) {
    this.setState({ searchText: target.value });
  }

  async searchProducts() {
    const { searchText } = this.state;
    const text = searchText;
    const response = await api.getProductsFromCategoryAndQuery('', text);
    const list = await response.results;
    this.setState({ productList: list });
    console.log(this.state.productList);
  }

  render() {
    const { productList } = this.state;
    return (
      <div className="App">
        <input
          type="text"
          data-testid="query-input"
          onChange={ this.setSearchText }
        />
        <button type="button" onClick={ this.searchProducts } data-testid="query-button">
          Pesquisar
        </button>
        <button type="button">
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">
            Carrinho de Compras
          </Link>
        </button>
        <div className="left-side">
          <Categories />
        </div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ul>
          {productList
            .map((product) => (
              <ProductCard product={ product } key={ product.id } />
            ))}
        </ul>
      </div>
    );
  }
}
