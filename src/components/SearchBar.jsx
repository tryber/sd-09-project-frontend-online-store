import React from 'react';
import { Link } from 'react-router-dom';
import shopCart from '../images/shopCart.png';
import ListCategories from './ListCategories';

import { getProductsFromCategoryAndQuery } from '../services/api';
import CreateCard from './CreateCard';
import AddButton from './AddButton';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      productList: undefined,
      searchQuery: '',
      searchCategory: '',
    };

    this.getQuery = this.getQuery.bind(this);
    this.getCategory = this.getCategory.bind(this);
    this.blankField = this.blankField.bind(this);
  }

  componentDidMount() {
    this.requestList();
  }

  // Altera o estado de search para o valor contido na searchBar
  async getQuery(event) {
    await this.setState({
      searchQuery: event.target.value,
    });
    // console.log(this.state.searchQuery);
  }

  async getCategory(event) {
    await this.setState({
      searchCategory: event.target.value,
    });
    this.requestList();
    // console.log(this.state.searchCategory);
  }

  async requestList() {
    const { searchCategory, searchQuery } = this.state;
    const reqList = await getProductsFromCategoryAndQuery(searchCategory, searchQuery);
    this.setState({
      productList: reqList,
    });
    localStorage.setItem('productObj', JSON.stringify(reqList));
  }

  blankField() {
    return (
      <p className="alert-message">Nenhum produto foi encontrado</p>
    );
  }

  render() {
    const { productList } = this.state;
    return (
      <div className="master-container">
        <div className="content-category">
          <ListCategories fnc={ this.getCategory } />
        </div>

        <div className="main">
          <div className="header">
            <input
              data-testid="query-input"
              type="text"
              className="search-bar-main"
              onChange={ this.getQuery }
            />

            <button
              className="btn-search"
              data-testid="query-button"
              type="button"
              onClick={ () => this.requestList() }
            >
              Pesquisar
            </button>
            <Link to="/shopping-cart" data-testid="shopping-cart-button">
              <img
                src={ shopCart }
                alt="Imagem do carrinho de compras"
                className="shop-cart-main"
              />
            </Link>
          </div>

          <h4 data-testid="home-initial-message" className="message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h4>

          <div className="card-container">
            { !productList ? this.blankField()
              : productList.results.map((product) => (
                <div className="card" key={ product.id }>
                  <CreateCard product={ product } />
                  <AddButton product={ product } />
                </div>)) }
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
