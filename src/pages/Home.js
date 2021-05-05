import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import Categories from '../components/Categories';
import Products from '../components/Products';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: '',
      searchText: '',
      products: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.getCategory = this.getCategory.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.seedStateProducts = this.seedStateProducts.bind(this);
    this.fetchProductIdAndQuery = this.fetchProductIdAndQuery.bind(this);
  }

  // a cada click, chama a função fetchProductAndQuery com os elementos atuais do estado para povoar lista de produtos do estado;
  handleClick() {
    this.seedStateProducts();
  }

  // busca o event.target.value de categories via callback, salva o estado e chama a função para povoar produtos.
  getCategory(category) {
    this.setState({ categoryId: category });
    this.fetchProductIdAndQuery(category);
  }

  // salva as modificações de texto do input no estado =D
  changeHandler(event) {
    this.setState({ searchText: event.target.value });
  }

  // chama a função fetchProductAndQuery com os elementos atuais do estado para povoar lista de produtos;
  seedStateProducts() {
    const { searchText, categoryId } = this.state;
    this.fetchProductIdAndQuery(categoryId, searchText);
  }

  // busca e salva lista de produtos por parametro 'categoryId' e 'searchText'
  async fetchProductIdAndQuery(categoryId, searchText = '') {
    const { results } = await api.getProductsFromCategoryAndQuery(categoryId, searchText);
    this.setState({ products: results });
  }

  render() {
    const { searchText, products } = this.state;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/meucarrinho">carrinho</Link>
        <input
          data-testid="query-input"
          value={ searchText }
          onChange={ (event) => this.changeHandler(event) }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <Products products={ products } seedStateProducts={ this.seedStateProducts } />
        <Categories getCategory={ this.getCategory } />
      </div>
    );
  }
}

export default Home;
